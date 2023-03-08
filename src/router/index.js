/*
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Root from '../views/dashboard/Root.vue';
import Guild from '../views/dashboard/Guild.vue';
import GuildDashboard from '../views/dashboard/GuildDashboard.vue';
import GuildSettings from '../views/dashboard/GuildSettings.vue';
import GuildUtility from '../views/dashboard/GuildUtility.vue';
import Login from '../views/Login.vue';

import store from '@/store';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/dashboard',
        name: 'DashboardRoot',
        component: Root,
        meta: {
            requiresAuth: true,
            autoLogin: true
        }
    },
    {
        path: '/dashboard/:id',
        name: 'DashboardGuild',
        component: Guild,
        meta: {
            requiresAuth: true,
            autoLogin: true
        },
        children: [
            {
                path: '',
                component: GuildDashboard,
            },
            {
                path: 'settings',
                component: GuildSettings,
            },
            {
                path: 'utility',
                component: GuildUtility,
            },
        ],
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
    },
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.isLoggedIn) {
            if (to.matched.some(record => record.meta.autoLogin)) {
                window.location = window.apiURL + "/api/login";
            }
            window.scrollTo(0, 0) // scroll to the top
            next('/');
            return;
        }
    }
    window.scrollTo(0, 0) // scroll to the top
    next();
});

export default router
*/

import { createRouter, createWebHistory } from "vue-router"
import GuildList from "@/ui/GuildList.vue"
import GuildHome from "@/ui/dashboard/GuildHome.vue"
import Guild from "@/ui/dashboard/Guild.vue"
import Home from "@/ui/Home.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
        path: "/dashboard",
        name: "DashboardRoot",
        component: GuildList,
        meta: {
            requiresAuth: true,
            autoLogin: true
        }
    },
    {
        path: "/dashboard/:id",
        name: "DashboardGuild",
        component: Guild,
        meta: {
            requiresAuth: true,
            autoLogin: true
        },
        children: [
            {
                path: '',
                component: GuildHome,
            },
        ],
    },
  ]
})

export default router
