import { createStore } from 'vuex'
import user from './modules/user'
import guilds from './modules/guilds'

const store = createStore({
    modules: {
        user: user,
        guilds: guilds,
    },
})

export default store
