<script setup>
import { reactive, ref, computed, getCurrentInstance, onMounted, watch } from "vue"
const props = defineProps(["guild", "size"])

const size = computed(() => props.size || 10)
const guild = computed(() => props.guild || {})
</script>

<template>
    <div class="guild-icon">
        <img
            class="rounded-icon"
            v-if="guild.icon"
            :src="guild.icon"
            :style="{'--g-ic-size': size + 'rem'}"
        />
        <div
            class="rounded-icon guild-initials unselectable"
            v-else
            :style="{'--g-ic-size': size + 'rem', '--g-ic-font-size': (size/4) + 'em'}"
        >
            <span>{{ guild.name.getInitials() }}</span>
        </div>
    </div>
</template>

<style lang="scss">
.guild-icon {
    display: flex;
    justify-content: center;
    img {
        width: var(--g-ic-size);
        height: var(--g-ic-size);
    }
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
