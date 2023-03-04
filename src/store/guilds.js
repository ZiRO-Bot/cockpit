

const state = () => ({
    discordGuilds: null,
})


const getters = {
    discordGuilds: state => state.discordGuilds
};


const actions = {
    clearGuilds({commit}) {
        commit('setGuilds', null)
    }
};


const mutations = {
    setGuilds(state, data) {
        state.discordGuilds = data;
    }
};


export default {
    state,
    getters,
    actions,
    mutations
};
