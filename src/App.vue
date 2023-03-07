<script setup>
import { computed, onMounted, watch } from "vue"
import { RouterLink, RouterView } from "vue-router"
import { useStore } from "vuex"
import { deleteCookie } from "@/utils/common.js"
// TODO: Add loading screen

// Meta
const store = useStore()

store.dispatch("updateLoginState")  // Making sure login state is up to date

// Data
const loggedIn = computed(() => store.getters.isLoggedIn)

// onMounted
onMounted(() => {
    if (loggedIn.value) {
        store.dispatch("getIdentity").catch((error) => {
            if (location != null)
                switch (error.response.status) {
                    case 401:
                    case 502:
                        deleteCookie("loggedIn")
                        store.dispatch("updateLoginState")
                        break
                    default:
                        console.error(error)
                        break
                }
            else
                console.error(error)
        })
    }
})
</script>

<template>
    <RouterView/>
</template>
