/*
   Z3R0's Dashboard
   Copyright (C) 2021  null2264

   This program is free software: you can redistribute it and/or modify
   it under the terms of the GNU Affero General Public License as published
   by the Free Software Foundation, either version 3 of the License, or
   (at your option) any later version.

   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU Affero General Public License for more details.

   You should have received a copy of the GNU Affero General Public License
   along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { createApp } from "vue"
import axios from 'axios'

import App from "./App.vue"
import router from "./router"
import store from "./store"

import './style/app.scss'

// FastAPI backend
const apiURL = "http://127.0.0.1"

axios.defaults.withCredentials = true
axios.defaults.baseURL = apiURL

/* Inject `.getInitials()` to String
 *
 * Useful for guild list when a guild doesn't have an icon
 */

String.prototype.getInitials = function(glue){
    if (typeof glue == "undefined") {
        glue = true
    }

    const initials = this.replace(/[^a-zA-Z- \/]/g, "").match(/(?:\b\w|\/)/g)
    
    if (glue) {
        try {
            return initials.join('')
        }
        catch (_error) {
            return this.substring(0,3)
        }
    }

    return initials
}

String.prototype.capitalize = function(){
    return this.toLowerCase().replace( /\b\w/g, function (m) {
        return m.toUpperCase()
    })
}

/*
Vue.mixin({
    methods: {
        goTo(endpoint) {
            this.$router.push(endpoint)
        },
        guildIcon(guild) {
            return `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`
        },
        userAvatar(user) {
            return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
        },
    }
})

Vue.config.productionTip = false
Vue.prototype.$apiURL = apiURL
window.apiURL = apiURL

axios.interceptors.response.use(undefined, function (error) {
    if (error) {
        const originalRequest = error.config
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true
            store.dispatch('logOut')
            window.location = apiURL + "/api/login"
        }
    }
})
*/

const app = createApp(App)
app.config.globalProperties.$apiURL = apiURL
app.use(store)
app.use(router)
app.mount("#app")
