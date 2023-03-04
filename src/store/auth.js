import axios from 'axios';

const state = {
    discord_user: null,
    discord_guilds: null,
}

const getters = {
    discord_user: state => state.discord_user,
    discord_guilds: state => state.discord_guilds
};

const actions = {
    async getGeneralData({commit}, location) {
        await axios.get('/api/@me/guilds')
        .then((res) => { 
            commit('setGeneralData', res.data);
        })
        .catch((error) => {
            if (error.response.status == 401 && location != null) {
                commit('clearGeneralData');
                window.location = location;
                return
            }
            console.error(error);
        });
    },
    clearGeneralData({commit}) {
        commit('clearGeneralData');
    }
};

const mutations = {
    setGeneralData(state, data) {
        state.discord_user = data.user;
        state.discord_guilds = data.guilds;
    },
    clearGeneralData(state) {
        state.discord_user = null;
        state.discord_guilds = null;
    }
};


export default {
    state,
    getters,
    actions,
    mutations
};
