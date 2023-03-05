<script setup>
import { reactive, ref, computed, getCurrentInstance, onMounted } from 'vue'
import { RouterLink, RouterView } from "vue-router"
import { useStore } from "vuex"

// Meta
const store = useStore()

// Data
const loggedIn = computed(() => store.getters.isLoggedIn)

// onMounted
onMounted(() => {
    if (loggedIn) {
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
    <div id="app">
        <RouterView/>
    </div>
</template>
