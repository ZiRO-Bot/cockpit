<script setup>
import GuildIcon from "@/widget/guild/GuildIcon.vue"
import { Users, Hash, Volume2 } from "lucide-vue-next"

const props = defineProps(["guild"])
</script>

<template>
    <div class="content">
        <div class="row full-w">
            <div class="col-12">
                <div class="card guild-info flex-col">
                    <div class="card-content">
                        <div class="flex guild-stats full-w">
                            <div class="flex guild-stat full-w flex-h-center">
                                <div class="icon flex-h-center flex-v-center">
                                    <Users size="32" stroke-width="2.5" />
                                </div>
                                <div class="flex-col flex-h-center">
                                    <h4 class="t-align-s stat-title">Members</h4>
                                    <a class="t-align-s stat">{{ guild.stats.members }}</a>
                                </div>
                            </div>
                            <div class="flex guild-stat full-w flex-h-center">
                                <div class="icon flex-h-center flex-v-center">
                                    <Hash size="32" stroke-width="2.5" />
                                </div>
                                <div class="flex-col flex-h-center">
                                    <h4 class="t-align-s stat-title">Text Channels</h4>
                                    <a class="t-align-s stat">{{ guild.stats.textChannels }}</a>
                                </div>
                            </div>
                            <div class="flex guild-stat full-w flex-h-center">
                                <div class="icon flex-h-center flex-v-center">
                                    <Volume2 size="32" stroke-width="2.5" />
                                </div>
                                <div class="flex-col flex-h-center">
                                    <h4 class="t-align-s stat-title">Voice Channels</h4>
                                    <a class="t-align-s stat">{{ guild.stats.voiceChannels }}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row full-w">
            <div class="col-4">
                <div class="card guild-info">
                    <div class="card-title">
                        <h4 class="guild-stats">
                            Server Stats
                        </h4>
                    </div>
                    <div class="card-content">
                        <GuildIcon :guild="guild" :size="6"/>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card guild-info">
                    <div class="card-title">
                        <h4 class="guild-stats">
                            Server Stats
                        </h4>
                    </div>
                    <div class="card-content">
                        <GuildIcon :guild="guild" :size="6"/>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card guild-info">
                    <div class="card-title">
                        <h4 class="guild-stats">
                            Server Stats
                        </h4>
                    </div>
                    <div class="card-content">
                        <GuildIcon :guild="guild" :size="6"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    background-color: var(--bg-dark);
    border-radius: 1rem;
    margin-bottom: 2rem;
    > *:not([full-w]) {
        margin-inline: 1.5rem;
    }
    .card-title, .card-content {
        display: flex;
    }
    .card-title > * {
        margin-top: 2rem;
        margin-bottom: 0;
    }
    .card-content {
        padding-block: 2rem;
    }
}

.guild-stats {
    .guild-stat {
        > *:not(:last-child) {
            margin-right: 1rem;
        }
        h4 {
            margin: 0;
            font-weight: 400;
        }
        .stat {
            font-size: 2em;
            font-weight: 700;
        }
    }
}

.content {
    margin: 2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: start;
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
