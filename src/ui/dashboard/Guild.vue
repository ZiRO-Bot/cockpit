<script setup>
import { reactive, ref, computed, getCurrentInstance, onMounted, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useStore } from "vuex"
import axios from "axios"
import GuildIcon from "../../widget/guild/GuildIcon.vue"

// TODO: Use shimmer for loading

// Meta
const route = useRoute()
const router = useRouter()
const store = useStore()

// Data
const isLoading = ref(true)
const id = ref(route.params.id)
const guild = ref(null)
const ws = new WebSocket("ws://127.0.0.1/api/ws")
ws.onmessage = (event) => {
    console.log(event.data)
}

// onMounted
onMounted(() => {
    store.dispatch("getGuilds").then(() => {
        const value = store.getters.guilds.find(x => x.id == id.value)
        if (!value) {
            router.push("/dashboard")
        } else {
            guild.value = value
            isLoading.value = false
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
                </div>
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
