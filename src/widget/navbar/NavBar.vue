<script setup>
import { reactive, toRef, ref, computed, getCurrentInstance, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import axios from 'axios'

// Meta
const app = getCurrentInstance()
const router = useRouter()
const store = useStore()

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
            <div class="brand clickable unselectable" @click="router.push('/')">
                <img class="rounded-icon" src="/static/logo.png" width="41" height="41"/>
                <a class="brand-name" style="font-weight: 800;">Z3R0</a>
            </div>
            <div class="nav-item flex-grow">
            </div>
            <div class="nav-item position-relative" v-if="isLoggedIn" right>
                <details class="dropdown">
                    <summary>
                        <img class="rounded-icon"
                            :src="user.avatar"
                            width="31"
                            height="31"
                        />
                    </summary>
                    <details-menu class="dropdown-menu" style="width: 180px;">
                        <a disabled>Logged in as {{ user.username }}</a>
                        <hr/>
                        <div class="flex-col dropdown-item group">
                            <a class="btn small" @click="router.push('/dashboard')">Guilds</a>
                            <a class="btn small" @click="logOut">Log Out</a>
                        </div>
                    </details-menu>
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

.dropdown[open] > summary::before {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 80;
    display: block;
    cursor: default;
    content: " ";
    background: transparent;
}

.dropdown-menu {
    border-radius: 1.5rem;
    padding: 0.5rem;
    left: auto;
    right: 0;
    position: absolute;
    z-index: 1000;
    background-color: var(--bg-dark)!important;
    .disabled {
        background-color: var(--bg-dark)!important;
    }
    .dropdown-divider {
        border-top: 1px solid var(--gray);
    }
    .dropdown-item {
        &.group > *:not(:last-child) {
            margin-bottom: 0.5rem;
        }
        color: white!important;
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

.brand {
    display: flex;
    align-items: center;
}

.brand-name {
    padding: 5px;
    text-decoration: none!important;
    color: var(--light)!important;
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
