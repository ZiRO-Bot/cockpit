<script setup>
import { reactive, toRef, ref, computed, getCurrentInstance, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import axios from 'axios'

// Meta
const app = getCurrentInstance()
const router = useRouter()
const store = useStore()

function userAvatar(user) {
    return ""
}

async function logOut() {
    store.dispatch("logOut")
}

// Data
const userInfo = computed(() => store.getters.user)
console.log(userInfo)
const isLoggedIn = computed(() => store.getters.isLoggedIn)
const loginUrl = ref(app.appContext.config.globalProperties.$apiURL + "/api/login")
</script>

<template>
    <header class="h-navbar">
        <div class="navbar">
            <div class="brand clickable unselectable" @click="goTo('/')">
                <img class="rounded-icon" src="/static/logo.png" width="41" height="41"/>
                <a class="brand-name" style="font-weight: 800;">Z3R0</a>
            </div>
            <div class="nav-item" v-if="isLoggedIn" right>
                <a disabled>Logged in as {{ userInfo.username }}</a>
                <hr/>
                <img class="rounded-icon"
                    :src="userAvatar(userInfo)"
                    width="31"
                    height="31"
                />
                <a class="btn" @click="router.push('/dashboard')">Guilds</a>
                <a class="btn" @click="logOut">Log Out</a>
            </div>
            <a class="btn" :href="loginUrl" v-else>Login</a>
        </div>
    </header>
</template>

<style lang="scss" scoped>
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
header.h-navbar {
    padding-bottom: 92px;
}
.clickable {
    cursor: pointer;
}
.dropdown-menu {
    position: absolute;
    background-color: var(--dark)!important;
    .disabled {
        background-color: var(--dark)!important;
    }
    .dropdown-divider {
        border-top: 1px solid var(--gray-dark);
    }
    .dropdown-item {
        color: var(--light)!important;
        &:hover, &:focus {
            background-color: var(--primary)!important;
        }
    }
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
