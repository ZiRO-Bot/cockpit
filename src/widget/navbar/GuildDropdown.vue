<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ChevronDown } from "lucide-vue-next"
import GuildIcon from "@/widget/guild/GuildIcon.vue"
import Spinner from "@/widget/Spinner.vue"

// Meta
const route = useRoute()
const router = useRouter()
const store = useStore()

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
</script>

<template>
    <details class="dropdown position-relative">
        <summary class="flex-v-center">
            <Spinner v-if="isLoading" size="32" />
            <GuildIcon v-else :guild="guild" size="32"/>
            <a class="guild-name">{{ guild.name }}</a>
            <ChevronDown class="ic" size="20"/>
        </summary>
        <div class="dropdown-menu" style="width: 180px;">
            <hr class="dropdown-divider"/>
            <div class="flex-col dropdown-item group">
                <a class="btn small" @click="router.push('/dashboard')">My Servers</a>
            </div>
        </div>
    </details>
</template>

<style lang="scss" scoped>
.dropdown {
    margin-right: 2rem;
    summary {
        a.guild-name {
            padding-left: 0.5rem;
        }
        .dropdown-menu > a {
            padding-left: 0.5rem;
        }
    }
}
</style>
