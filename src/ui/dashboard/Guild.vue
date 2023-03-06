<script setup>
import { reactive, ref, computed, getCurrentInstance, onMounted, onUnmounted, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useStore } from "vuex"
import axios from "axios"
import GuildIcon from "@/widget/guild/GuildIcon.vue"
import NavBar from "@/widget/navbar/NavBar.vue"

// TODO: Use shimmer for loading

// Meta
const route = useRoute()
const router = useRouter()
const store = useStore()

const ws = new WebSocket("ws://127.0.0.1/api/ws")
ws.onmessage = (event) => {
    const data = JSON.parse(event.data)
    console.log(event.data)
    if (guild.value == data.before.name)
        guild.value = data.after.name
}

// Data
const isLoading = ref(true)
const id = ref(route.params.id)
const guild = ref(null)
const guildIcon = ref(null)

// onMounted
onMounted(() => {
    store.dispatch("getGuilds").then(() => {
        const g = store.getters.guilds.find(x => x.id == id.value)
        if (!g) {
            router.push("/dashboard")
        } else {
            guildIcon.value = g.icon
            guild.value = g.name
            isLoading.value = false
        }
    })
})

onUnmounted(() => ws.close())
</script>

<template>
    <NavBar />
    <div class="dashguild">
        <a v-if="isLoading">
            Loading...
        </a>
        <div class="dashguild-content" v-else>
            <div class="guild-detailed-info">
                <GuildIcon :icon="guildIcon"/>
                <div class="guild-stats">
                    <h4 class="guild-name">
                        {{ guild }}
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
