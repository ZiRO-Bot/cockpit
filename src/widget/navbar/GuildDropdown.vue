<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ChevronDown } from "lucide-vue-next"
import GuildIcon from "@/widget/guild/GuildIcon.vue"
import Spinner from "@/widget/Spinner.vue"

// Meta
const props = defineProps(["guild", "isLoading"])

const router = useRouter()
const store = useStore()
</script>

<template>
    <details class="dropdown position-relative">
        <summary class="flex-v-center">
            <Spinner v-if="isLoading" size="32" stroke-width="3"/>
            <div v-else class="flex-row flex-v-center">
                <GuildIcon :guild="guild" size="32"/>
                <a class="guild-name">{{ guild.name }}</a>
            </div>
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
