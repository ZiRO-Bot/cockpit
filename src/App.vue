<script setup>
import { computed, onMounted, watch } from "vue"
import { RouterLink, RouterView } from "vue-router"
import { useStore } from "vuex"
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
            if (error.response.status == 401 && location != null) {
                store.dispatch("updateLoginState")
            } else {
                console.error(error);
            }
        })
    }
})
</script>

<template>
    <RouterView/>
</template>
