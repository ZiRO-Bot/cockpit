import axios from 'axios'


const state = () => ({
    user: {},
    isLoggedIn: false,
});


function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


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
        })
    }
};


const mutations = {
    setUser(state, user) {
        state.user = user
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
