<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { loginUrl } from "@/utils/constant"
import axios from 'axios'
import Brand from "@/widget/Brand.vue"
import UserDropdown from "@/widget/navbar/UserDropdown.vue"

// Meta
const router = useRouter()
const store = useStore()
const props = defineProps(["dashboard"])
const inDashboard = computed(() => !!props.dashboard)

function openLogin() {
    window.open(loginUrl, "_blank")
}

// Data
const isLoggedIn = computed(() => store.getters.isLoggedIn)
</script>

<template>
    <div class="navbar">
        <Brand class="clickable" @click="router.push('/')" />
        <div class="nav-item flex-grow">
        </div>
        <div class="nav-item position-relative" v-if="isLoggedIn" right>
            <UserDropdown />
        </div>
        <button class="btn small" @click="openLogin" v-else>
            Login
        </button>
    </div>
</template>

<style lang="scss" scoped>
</style>
