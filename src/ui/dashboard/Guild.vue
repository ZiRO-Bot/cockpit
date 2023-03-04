<script setup>
import { reactive, ref, computed, getCurrentInstance, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import axios from 'axios'
import GuildIcon from '../widget/GuildIcon.vue'

// TODO: Use shimmer for loading

// Meta
const route = useRoute()
const store = useStore()

async function getGuilds({commit}) {
    await axios.get('/api/v1/@me/guilds')
    .then((res) => {
        store.commit('setGuilds', res.data);
    })
}

// Data
const guild = ref(null)
const isLoading = ref(true)
const id = ref(route.params.id)
const guilds = computed(() => store.getters.discordGuilds)

// onMounted
onMounted(() => {
    getGuilds().then(() => {
        const guild = this.guilds.find(x => x.id === this.id);

        if (!guild) {
            this.goTo('/dashboard')
        } else {
            this.guild = guild
            this.isLoading = false
        }
    })
})
</script>

<template>
    <div class="dashguild">
        <a v-if="isLoading">
            Loading...
        </a>
        <div class="dashguild-content" v-else>
            <div class="guild-detailed-info">
                <GuildIcon :guild="guild"/>
                <div class="guild-stats">
                    <h4 class="guild-name">
                        {{ guild.name }}
                    </h4>
                    <p><b-icon-person-fill/> <b>{{ guild.stats.members }}</b> Members</p>
                </div>
            </div>
            <div class="dashboard-menus bg-darker">
                <a class="clickable" @click="goTo(`/dashboard/${id}`)">
                    <b-icon-house-fill/> Dashboard
                </a>
                <a class="clickable" @click="goTo(`/dashboard/${id}/settings`)">
                    <b-icon-gear-fill/> Settings
                </a>
                <a class="clickable" @click="goTo(`/dashboard/${id}/utility`)">
                    <b-icon-wrench/> Utility
                </a>
            </div>
            <div class="bg-dark">
                <router-view :guild="guild"></router-view>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.dashguild-content {
    .guild-detailed-info {
        padding-inline: 50px;
        display: flex;
        justify-content: start;
        align-items: center;
        margin-top: 20px;
        & > .guild-stats {
            margin-left: 20px;
            & > p {
                text-align: start;
                margin-bottom: 0px;
            }
            & > .guild-name {
                font-weight: bold;
                color: var(--light) !important;
                text-decoration: none !important;
            }
        }
    }
    .dashboard-menus {
        margin-top: 25px;
        padding-block: 12px;
        a {
            color: var(--light) !important;
            text-decoration: none !important;
        }
        a:not(:last-child) {
            margin-right: 45px;
        }
    }
}
</style>
