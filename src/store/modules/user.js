import axios from "axios"
import { getCookie, setCookie, deleteCookie } from "@/utils/common.js"


const state = () => ({
    user: { "username": getCookie("user") },
    isLoggedIn: false,
});


const getters = {
    user: state => state.user,
    isLoggedIn: state => state.isLoggedIn,
};


const actions = {
    updateLoginState({commit}) {
        const isLoggedIn = getCookie("loggedIn") === "yes"
        commit('setLoginState', isLoggedIn)
        if (!isLoggedIn)
            commit('setUser', {})
    },
    async getIdentity({commit}) {
        await axios.get('/api/v1/@me').then((res) => {
            commit('setUser', res.data)
        })
    },
    async logOut({dispatch}) {
        await axios.post('/api/logout').then((res) => {
            if (res.data.status == 200)
                dispatch('updateLoginState')
        }).catch(() => {
            dispatch('updateLoginState')
        })
    }
};


const mutations = {
    setUser(state, user) {
        state.user = user
        const userName = user.username
        if (userName)
            setCookie("user", userName, 31556926)
        else
            deleteCookie("user")
    },
    setLoginState(state, loggedIn) {
        state.isLoggedIn = loggedIn
    }
};


export default {
    state,
    getters,
    actions,
    mutations
};
