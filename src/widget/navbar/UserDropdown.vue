<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ChevronDown } from "lucide-vue-next"

// Meta
const router = useRouter()
const store = useStore()

async function logOut() {
    store.dispatch("logOut")
}

// Data
const user = computed(() => store.getters.user)
</script>

<template>
    <details class="dropdown position-relative">
        <summary class="flex-v-center">
            <img class="rounded-icon"
                :src="user.avatar"
                width="32"
                height="32"
            />
            <ChevronDown class="ic" size="20"/>
        </summary>
        <div class="dropdown-menu" style="width: 180px;">
            <a disabled>Logged in as {{ user.username }}</a>
            <hr class="dropdown-divider"/>
            <div class="flex-col dropdown-item group">
                <a class="btn small" @click="router.push('/dashboard')">My Servers</a>
                <a class="btn small" @click="logOut">Log Out</a>
            </div>
        </div>
    </details>
</template>

<style scoped>
.dropdown-menu > a {
    padding-inline: 0.5rem;
}
</style>
