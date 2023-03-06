<script setup>
import { reactive, ref, computed, getCurrentInstance, onMounted, watch } from "vue"
const props = defineProps(["guild", "icon"])

const guildIcon = ref(!!props.guild ? props.guild.icon : props.icon)
</script>

<template>
    <div class="guild-icon">
        <img
            class="rounded-icon"
            v-if="guildIcon"
            :src="guildIcon"
        />
        <div class="rounded-icon guild-initials unselectable" v-else>
            <span>{{ guild.name.getInitials() }}</span>
        </div>
    </div>
</template>

<style lang="scss">
.guild-icon {
    display: flex;
    justify-content: center;
    img {
        width: 150px;
        height: 150px;
    }
    .guild-initials {
        background: var(--discord-blurple);
        display: flex;
        font-size: xx-large;
        font-weight: bold;
        width: 150px;
        height: 150px;
        align-items: center;
        justify-content: center;
    }
}
</style>
