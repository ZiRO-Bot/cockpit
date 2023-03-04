import axios from 'axios'


const state = () => ({
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
    isLoggedIn: state => state.isLoggedIn,
};


const actions = {
    updateLoginState({commit}) {
        commit('setLoginState', getCookie("loggedIn") === "yes")
    },
    logOut({commit}) {
        commit('setUserData', null)
        commit('setGuilds', null)
    }
};


const mutations = {
    setLoginState(state, loggedIn) {
        state.isLoggedIn = loggedIn;
    }
};


export default {
    state,
    getters,
    actions,
    mutations
};
