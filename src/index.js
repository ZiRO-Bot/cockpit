import createPersistedState from "vuex-persistedstate";
import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';
import guilds from './modules/guilds';


Vue.use(Vuex);


export default new Vuex.Store({
    modules: {
        user,
        guilds,
    },
    plugins: [createPersistedState()]
});
