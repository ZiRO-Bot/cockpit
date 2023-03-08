<script setup>
import { ref, computed, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import axios from 'axios'
import Brand from "@/widget/Brand.vue"
import UserDropdown from "@/widget/navbar/UserDropdown.vue"

// Meta
const app = getCurrentInstance()
const router = useRouter()
const store = useStore()
const props = defineProps(["dashboard"])
const inDashboard = computed(() => !!props.dashboard)

async function logOut() {
    store.dispatch("logOut")
}

// Data
const isLoggedIn = computed(() => store.getters.isLoggedIn)
const loginUrl = ref(app.appContext.config.globalProperties.$apiURL + "/api/login")
</script>

<template>
    <div class="navbar">
        <div class="nav-item flex-grow">
        </div>
        <div class="nav-item position-relative" v-if="isLoggedIn" right>
            <UserDropdown />
        </div>
        <a class="btn small" :href="loginUrl" v-else>Login</a>
    </div>
</template>
