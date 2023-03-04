<template>
    <div id="guilds">
        <b-card bg-variant="transparent" class="guild-list-card">
            <template #header>
                <h3 class="mb-0">{{ user.username }}'s Guilds</h3>
            </template>

            <b-card-body class="guild-list">
                <div class="guild" v-for="guild in guilds" :key="guild">
                    <GuildIcon :guild="guild"/>
                    <div class="guild-info">
                        <div class="guild-info-name">
                            <a>{{ guild.name }}</a>
                        </div>
                        <div>
                            <b-btn variant="primary" v-if="guild.bot" @click="goTo(`/dashboard/${guild.id}`)">Setup</b-btn>
                            <b-btn v-else :href="guild.invite">Invite</b-btn>
                        </div>
                    </div>
                </div>
            </b-card-body>
        </b-card>
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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    /* grid-template-columns: 1fr 1fr 1fr; */
}
.guild {
    width: 100%;
    padding: 24px;
    .guild-icon {
        padding-bottom: 20px;
    }
    .guild-info {
        display: flex;
        justify-content: space-between;
        .guild-info-name {
            display: flex;
            align-items: center;
            a {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
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

<script>
import { mapActions } from 'vuex';
import GuildIcon from './GuildIcon.vue';

export default {
    name: 'GuildList',
    components: {
        GuildIcon,
    },
    computed: {
        user: function() {
            return this.$store.getters.discord_user;
        },
        guilds: function() {
            return this.$store.getters.discord_guilds;
        },
    },
    methods: {
        ...mapActions(['getGuilds', 'clearUserData']),
    },
    created() {
        this.getGuilds()
        .catch((error) => {
            if (error.response.status == 401 && location != null) {
                this.clearUserData();
                window.location = this.$apiURL + "/api/login";
            } else {
                console.error(error);
            }
        });
    }
}
</script>
