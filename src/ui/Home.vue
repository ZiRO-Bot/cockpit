<script setup>
import { reactive, ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios';
import NavBar from '../widget/navbar/NavBar.vue'
import Spinner from '../widget/spinner/Spinner.vue'

// Meta
const store = useStore()

// Data
let stats = reactive({ guilds: 0, users: 0, commands: 0 })
const isLoggedIn = computed(() => store.state.isLoggedIn)

// onCreated
store.dispatch("updateLoginState")

// onMounted
function getBotStats() {
    axios.get('/api/v1/botstats')
    .then((res) => {
        const data = res.data
        stats.guilds = data.guilds
        stats.users = data.users
        stats.commands = data.commands
    })
}

onMounted(() => {
    getBotStats()
})
</script>

<template>
    <NavBar/>
    <div class="home">
        <div class="header">
            <div class="title">
                <b>Z3R0</b>
            </div>
            <div class="subtitle">
                A libre multi-purpose customizable discord bot
            </div>

            <div class="buttons">
                <a class="btn" @click="goTo('dashboard')">Add to Discord</a>
                <a class="btn info" href="#features">Features</a>
            </div>
        </div>
        <div class="botstats bg-darker">
            <a><b>{{ stats.guilds }}</b> Servers</a>
            <a><b>{{ stats.users }}</b> Users</a>
            <a><b>{{ stats.commands }}</b> Commands Ran</a>
        </div>
        <div class="home-content bg-dark">
            <div class="features" id="features">
                <div class="feature" id="feature-1">
                    <div class="feature-detail">
                        <h1>Custom Commands</h1>
                        <p><b>Z3R0</b> has a TagScript system that allows you to
                        make a unique and complex custom commands such as
                        <code>&gt;&gt;membercount</code> or
                        <code>&gt;&gt;verify</code>.</p>
                        <br/>
                        <a class="btn">TagScript Documentation</a>
                    </div>
                    <img class="zoomable" src="/static/screenshot-1.png"/>
                </div>
                <div class="feature" id="feature-2">
                    <div class="feature-detail">
                        <p>Duo Reges: constructio interrete. Nam diligi et carum esse iucundum est propterea, quia tutiorem vitam et voluptatem pleniorem efficit. Consequens enim est et post oritur, ut dixi. Esse enim, nisi eris, non potes. Quid autem habent admirationis, cum prope accesseris? Non est enim vitium in oratione solum, sed etiam in moribus. Ego quoque, inquit, didicerim libentius si quid attuleris, quam te reprehenderim. An eiusdem modi? Nec enim, dum metuit, iustus est, et certe, si metuere destiterit, non erit; Etenim si delectamur, cum scribimus, quis est tam invidus, qui ab eo nos abducat? </p>
                        <a class="btn">More information</a>
                    </div>
                    <img class="zoomable" src="/static/screenshot-1.png"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.title {
    font-size: 2.5em;
}

.subtitle {
    font-size: 1em;
    margin: 1rem;
    color: var(--light-gray);
}

img.zoomable {
    transition: all 0.5s ease;
    &:hover {
        scale: 110%;
    }
}

.buttons {
    display: flex;
    gap: 0.6rem;
    justify-content: center;
}

.home-content {
    padding: 15px;
    .features {
        padding: 0px 100px 20px 100px;
        .feature {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 4.5rem 0px;
            .feature-detail {
                h1 {
                    font-weight: bold;
                }
                text-align: start;
                max-width: 460px;
                width: 100%;
            }
        }
        @media (min-width: 576px) {
            .feature:nth-child(2n) {
                flex-direction: row-reverse;
            }
        }
        @media (max-width: 576px) {
            .feature {
                flex-direction: column-reverse;
            }
        }
    }
}
.botstats {
    padding: 1.5rem;
    padding-top: 1.2rem;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
}
.botstats a {
    margin-inline: 50px;
    font-size: larger;
}
</style>
