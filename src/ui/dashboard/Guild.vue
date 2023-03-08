<script setup>
import { reactive, ref, computed, getCurrentInstance, onMounted, onUnmounted, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useStore } from "vuex"
import axios from "axios"
import DashboardNavBar from "@/widget/navbar/DashboardNavBar.vue"
import Brand from "@/widget/Brand.vue"
import Spinner from "@/widget/Spinner.vue"

// Meta
const route = useRoute()
const router = useRouter()
const store = useStore()

const ws = new WebSocket("ws://127.0.0.1/api/ws")
ws.onmessage = (event) => {
    const data = JSON.parse(event.data)
    console.debug(data)

    if (data.i)
        return

    if (data.before && data.after) {
        if (guild.value.id != data.before.id)
            return

        if (guild.value.name != data.after.name)
            guild.value.name = data.after.name

        if (guild.value.icon != data.after.icon)
            guild.value.icon = data.after.icon
    }
    console.log(guild.value)
}
ws.onopen = (event) => {
    ws.send(JSON.stringify({"t": "guild", "i": id.value}))
}

// Data
const isLoading = ref(true)
const id = ref(route.params.id)
const guild = ref({})

// onMounted
onMounted(() => {
    store.dispatch("getGuilds").then(() => {
        const g = store.getters.guilds.find(x => x.id == id.value)
        if (!g) {
            router.push("/dashboard")
        } else {
            guild.value = g
            isLoading.value = false
        }
    })
})
onUnmounted(() => ws.close())
</script>

<template>
    <div class="dashboard">
        <div class="side">
            <aside class="sidebar flex-col">
                <div class="flex-grow flex-h-center flex-v-center navbar-height">
                    <Brand class="clickable" @click='router.push("/dashboard/" + id)' />
                </div>
                <router-link class="sidebar-item btn" :to='"/dashboard/" + id'>Home</router-link>
                <router-link class="sidebar-item btn" :to='"/dashboard/" + id + "/meta"'>Meta</router-link>
                <router-link class="sidebar-item btn" to="/">Commands</router-link>
            </aside>
        </div>
        <div class="main">
            <DashboardNavBar />
            <div class="container">
                <div class="loading flex-v-center flex-h-center" v-if="isLoading">
                    <Spinner />
                </div>
                <router-view :guild="guild" v-else/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.dashboard {
    display: flex;
}

.brand {
    height: fit-content;
}

.sidebar {
    top: 0;
    position: sticky;
    margin-top: 0;
    .navbar-height {
        height: var(--navbar-height);
    }
    .btn {
        border-radius: 1rem;
        background-color: var(--bg-dark) !important;
        &.router-link-active {
            background-color: var(--bg-dark-btn) !important;
        }
        &:hover {
            color: var(--light-gray);
        }
    }
}

.side {
    width: 20%;
    max-width: 20%;
    background-color: var(--bg-dark);
    min-height: 100vh;
}

.main {
    width: 80%;
    .container .loading {
        height: var(--full-height-with-navbar);
    }
}
</style>
