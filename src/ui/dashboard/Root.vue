<template>
    <div class="dashroot">
        <GuildList/>
    </div>
</template>

<script>
import GuildList from '@/components/GuildList.vue'

export default {
    name: 'DashboardRoot',
    components: {
        GuildList
    }
}
</script>
