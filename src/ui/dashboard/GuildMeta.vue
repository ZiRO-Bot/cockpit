<script setup>
import { ref } from "vue"
import axios from "axios"

const props = defineProps(["guild"])

const prefix = ref("")

async function addPrefix() {
    await axios.put("/api/v1/prefix", { prefix: prefix.value, guildId: props.guild.id })
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
}
</script>

<template>
    <div class="content">
        <div class="row full-w">
            <div class="col-6">
                <div class="card">
                    <div class="card-title">
                        <h4 class="guild-stats">
                            Bot's Prefix
                        </h4>
                    </div>
                    <div class="card-body">
                        <div class="flex-col full-w">
                            <a v-for="prefix in guild.stats.prefixes" v-if="guild.stats.prefixes[0]">
                                {{ prefix }}
                            </a>
                            <a v-else>
                                No custom prefixes
                            </a>
                            <label class="input text-field full-w bot-gap-2">
                                <span id="label">Prefix</span>
                                <input v-model="prefix" type="text"/>
                            </label>
                            <button class="btn small" :disabled='prefix == ""' @click="addPrefix">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
