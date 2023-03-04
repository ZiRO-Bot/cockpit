import axios from 'axios';


const state = () => ({
    discord_guilds: null,
})


const getters = {
    discord_guilds: state => state.discord_guilds
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
        state.discord_guilds = data;
    }
};


export default {
    state,
    getters,
    actions,
    mutations
};
