<script setup>
import { reactive, ref, computed, getCurrentInstance, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import GuildIcon from '../widget/guild/GuildIcon.vue'
import NavBar from '../widget/navbar/NavBar.vue'

// Meta
const app = getCurrentInstance()
const route = useRoute()
const router = useRouter()
const store = useStore()

// Data
const guilds = computed(() => store.getters.guilds)
const loginUrl = app.appContext.config.globalProperties.$apiURL + "/api/login"

// onMounted
onMounted(() => {
    store.dispatch("getGuilds").catch((error) => {
        if (error.response.status == 401 && location != null) {
            store.dispatch("updateLoginState")
            if (!store.getters.isLoggedIn) {
                window.location = loginUrl;
            }
        } else {
            console.error(error);
        }
    });
})
</script>

<template>
    <NavBar />
    <div id="guilds">
        <section class="card" bg-variant="transparent">
            <header>
                <h2 class="mb-0">Select a Server</h2>
            </header>

            <div class="card-body guild-list">
                <div class="guild" v-for="guild in guilds" :key="guild">
                    <GuildIcon :guild="guild"/>
                    <div class="guild-info">
                        <div class="guild-info-name">
                            <a>{{ guild.name }}</a>
                        </div>
                        <div>
                            <a class="btn" v-if="guild.bot" @click="router.push(`/dashboard/${guild.id}`)">Setup</a>
                            <a class="btn info" v-else :href="guild.invite">Invite</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
#guilds {
    padding-top: 10px;
}
.guild-list-card {
    padding-top: 5px;
}
.guild-list {
    margin: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 1rem;
    /* grid-template-columns: 1fr 1fr 1fr; */
}
.guild {
    background-color: var(--bg-dark);
    border-radius: 1.5rem;
    width: 100%;
    padding: 1.5rem;
    .guild-icon {
        padding-bottom: 20px;
    }
    .guild-info {
        display: flex;
        justify-content: space-between;
        .guild-info-name {
            display: flex;
            align-items: center;
            margin-right: 1rem;
            a {
                text-align: start;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -moz-box-orient: vertical;
                -webkit-box-orient: vertical;
            }
        }
    }
}
.guild a img {
    padding: 14px;
}
.guild-list-card {
    margin: 40px auto 0px;
    width: min(100%, 948px);
}
</style>
