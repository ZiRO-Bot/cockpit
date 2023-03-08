<script setup>
import { reactive, toRef, ref, computed, getCurrentInstance, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import axios from 'axios'
import { ChevronDown } from "lucide-vue-next"
import Brand from "@/widget/Brand.vue"

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
const user = computed(() => store.getters.user)
const isLoggedIn = computed(() => store.getters.isLoggedIn)
const loginUrl = ref(app.appContext.config.globalProperties.$apiURL + "/api/login")
</script>

<template>
    <header class="h-navbar">
        <div class="navbar">
            <Brand class="clickable" @click="router.push('/')" />
            <div class="nav-item flex-grow">
            </div>
            <div class="nav-item position-relative" v-if="isLoggedIn" right>
                <details class="dropdown">
                    <summary class="flex-v-center">
                        <img class="rounded-icon"
                            :src="user.avatar"
                            width="31"
                            height="31"
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
            </div>
            <a class="btn small" :href="loginUrl" v-else>Login</a>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header.h-navbar {
    top: 0;
    position: sticky;
    overflow: visible;
    background-color: var(--bg-dark);
}

.dropdown-menu {
    > a {
        padding-inline: 0.5rem;
    }
}

.dropdown {
    > summary > .ic {
        margin-left: 0.2rem;
    }
}

.navbar {
    display: flex;
    padding: 1rem;
    padding-inline: 2rem;
    border-radius: 14px;
}

.navbar-nav .nav-item {
    padding-inline: 5px;
}
.navbar-shadow {
    box-shadow: 0px 0px 30px black;
}
.clickable {
    cursor: pointer;
}

@media (min-width: 576px) {
    .ml-login {
        padding-left: 2.5%!important;
    }
}

/*
.dropdown-menu {
    transition: all 0.5s ease;
    margin: 0.5rem 0 0;
    &:not(.show) {
        display: block !important;
        overflow: hidden;
        transform: translate(0, -5%);
        visibility: hidden;
        opacity: 0;
    }
    &.show {
        display: block;
        overflow: visible;
        transform: translate(0, 0);
    }
}
*/
</style>
