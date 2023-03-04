<script setup>
import { reactive, toRef, ref, computed, getCurrentInstance, onMounted } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios';

const props = defineProps(["user"])

const store = useStore()
const app = getCurrentInstance()

const userInfo = toRef(props, "user")
const isLoggedIn = computed(() => store.getters.isLoggedIn)
console.log(isLoggedIn)
const loginUrl = ref(app.appContext.config.globalProperties.$apiURL + "/api/login")

function userAvatar(user) {
    return ""
}

async function logout() {
    await axios.post("/api/logout")
    .then((res) => {
        if (res.data.status == 200) {
            store.dispatch("updateLoginState")
        }
    }).catch((err) => {
        if (err.response.status == 401) {
        }
    });
}
</script>

<template>
    <header class="h-navbar">
        <div class="navbar">
            <div class="brand clickable unselectable" @click="goTo('/')">
                <img class="rounded-icon" src="/static/logo.png" width="41" height="41"/>
                <a class="brand-name" style="font-weight: 800;">Z3R0</a>
            </div>
            <div class="nav-item" v-if="isLoggedIn" right>
                <a disabled>Logged in as {{ userInfo }}</a>
                <hr/>
                <img class="rounded-icon"
                    :src="userAvatar(userInfo)"
                    width="31"
                    height="31"
                />
                <a class="btn" @click="goTo('/dashboard')">Guilds</a>
                <a class="btn" @click="logout">Log Out</a>
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
