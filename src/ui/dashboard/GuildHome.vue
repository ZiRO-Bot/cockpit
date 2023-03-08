<script setup>
import GuildIcon from "@/widget/guild/GuildIcon.vue"
const props = defineProps(["guild"])
</script>

<template>
    <div class="content">
        <div class="row full-w">
            <div class="col-12">
                <div class="card guild-info flex-col">
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

        <h2>Test</h2>

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
    > *:not([full-w]) {
        margin-inline: 2rem;
    }
    .card-title, .card-content {
        display: flex;
    }
    .card-content {
        padding-block: 2rem;
    }
}

.content {
    margin: 2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: start;
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
