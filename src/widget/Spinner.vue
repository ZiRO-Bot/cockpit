<script setup>
// TODO: Support dark theme
import { reactive, toRef, ref, computed, getCurrentInstance, onMounted } from 'vue'
const props = defineProps(["color", "size", "strokeWidth"])

const color = ref(props.color || "#fff")
const size = ref(props.size || 48)
const strokeWidth = ref(props.strokeWidth || 2)
</script>

<template>
    <svg :width="size" :height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" :main="color" class="spinner">
        <path d="M23 12C23 18.0751 18.0751 23 12 23" data-stroke="main" :stroke="color" :stroke-width="strokeWidth" stroke-linecap="round" />
    </svg>
</template>

<style scoped>
.spinner {
    animation: 1.2s cubic-bezier(0.32, 0.65, 0.71, 0.4) 0s infinite normal none running spin;
}

@keyframes spin {
    from {rotate: 0deg}
    to {rotate: 360deg}
}
</style>
