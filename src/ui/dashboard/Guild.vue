<template>
    <div class="dashguild">
        <a v-if="isLoading">
            Loading...
        </a>
        <div class="dashguild-content" v-else>
            <div class="guild-detailed-info">
                <GuildIcon :guild="guild"/>
                <div class="guild-stats">
                    <h4 class="guild-name">
                        {{ guild.name }}
                    </h4>
                    <p><b-icon-person-fill/> <b>{{ guild.stats.members }}</b> Members</p>
                </div>
            </div>
            <div class="dashboard-menus bg-darker">
                <a class="clickable" @click="goTo(`/dashboard/${id}`)">
                    <b-icon-house-fill/> Dashboard
                </a>
                <a class="clickable" @click="goTo(`/dashboard/${id}/settings`)">
                    <b-icon-gear-fill/> Settings
                </a>
                <a class="clickable" @click="goTo(`/dashboard/${id}/utility`)">
                    <b-icon-wrench/> Utility
                </a>
            </div>
            <div class="bg-dark">
                <router-view :guild="guild"></router-view>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.dashguild-content {
    .guild-detailed-info {
        padding-inline: 50px;
        display: flex;
        justify-content: start;
        align-items: center;
        margin-top: 20px;
        & > .guild-stats {
            margin-left: 20px;
            & > p {
                text-align: start;
                margin-bottom: 0px;
            }
            & > .guild-name {
                font-weight: bold;
                color: var(--light) !important;
                text-decoration: none !important;
            }
        }
    }
    .dashboard-menus {
        margin-top: 25px;
        padding-block: 12px;
        a {
            color: var(--light) !important;
            text-decoration: none !important;
        }
        a:not(:last-child) {
            margin-right: 45px;
        }
    }
}
</style>

<script>
import { mapActions } from 'vuex';
import GuildIcon from '@/components/GuildIcon.vue';

export default {
    name: 'DashboardGuild',
    components: {
        GuildIcon,
    },
    data(){
        return {
            guild: null,
            isLoading: true,
            id: this.$route.params.id,
        }
    },
    computed: {
        guilds: function() {
            return this.$store.getters.discord_guilds;
        }
    },
    methods: {
        ...mapActions(['getGuilds']),
    },
    created() {
        // Check if user can manage the guild
        this.getGuilds().then(() => {
            const guild = this.guilds.find(x => x.id === this.id);

            if (!guild) {
                this.goTo('/dashboard')
            } else {
                this.guild = guild
                this.isLoading = false
            }
        });
    }
}
</script>
