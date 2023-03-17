<script setup>
import GuildIcon from "@/widget/guild/GuildIcon.vue"
</script>

<template>
    <div class="content">
        <div class="row full-w">
            <div class="col-6">
                <div class="card guild-info">
                    <div class="card-title">
                        <h4 class="guild-stats">
                            Builder
                        </h4>
                    </div>
                    <div class="card-body">
                        <div class="flex-col full-w">
                            <label class="input text-field full-w bot-gap-2">
                                <span id="label">Title</span>
                                <input type="text"/>
                            </label>
                            <label class="input text-field full-w bot-gap-2">
                                <span id="label">Title</span>
                                <input type="text"/>
                            </label>
                            <label class="input text-field full-w bot-gap-2">
                                <span id="label">Title</span>
                                <input type="text"/>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="card guild-info">
                    <div class="card-title">
                        <h4 class="guild-stats">
                            Embed
                        </h4>
                    </div>
                    <div class="card-body">
                        <div class="dsc-embed">
                            <div class="dsc-grid-container">
                                <div class="dsc-grid">
                                    <div class="dsc-embed-margin">
                                        <a>Test</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
