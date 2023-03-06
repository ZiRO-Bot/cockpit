import axios from "axios"


const state = () => ({
    guilds: [],
})


const getters = {
    guilds: state => state.guilds,
};


const actions = {
    async getGuilds({commit}) {
        await axios.get('/api/v1/@me/guilds')
        .then((res) => {
            commit('setGuilds', res.data);
        })
    },
    clearGuilds({commit}) {
        commit('setGuilds', null)
    }
};


const mutations = {
    setGuilds(state, data) {
        state.guilds = data;
    }
};


export default {
    state,
    getters,
    actions,
    mutations
};
