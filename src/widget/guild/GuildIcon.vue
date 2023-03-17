<script setup>
import { reactive, ref, computed, getCurrentInstance, onMounted, watch } from "vue"
const props = defineProps(["guild", "size"])

const size = computed(() => props.size || 160)
const guild = computed(() => props.guild || {})
</script>

<template>
    <div class="guild-icon">
        <img
            class="rounded-icon"
            v-if="guild.icon"
            :src="guild.icon"
            :width="size"
            :height="size"
        />
        <div
            class="rounded-icon guild-initials unselectable"
            v-else
            :style="{'--g-ic-size': size + 'px', '--g-ic-font-size': (size/4) + 'px'}"
            :width="size"
            :height="size"
        >
            <span>{{ guild.name.getInitials() }}</span>
        </div>
    </div>
</template>

<style lang="scss">
.guild-icon {
    display: flex;
    justify-content: center;
    .guild-initials {
        background: var(--discord-blurple);
        display: flex;
        font-size: var(--g-ic-font-size);
        font-weight: bold;
        width: var(--g-ic-size);
        height: var(--g-ic-size);
        align-items: center;
        justify-content: center;
    }
}
</style>
