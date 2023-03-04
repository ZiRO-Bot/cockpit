<template>
    <div>
        <h1>Logging In...</h1>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import axios from 'axios';

export default {
    name: 'Login',
    methods: {
        ...mapActions(['getUserData']),
        async doAuth(code) {
            // Try to login
            await axios.post('/api/v1/auth', { code: code })
            .catch(() => {
                this.goTo("/")
            });

            // Logged in successfully
            await this.getUserData();

            this.goTo("/dashboard");
        }
    },
    created() {
        this.doAuth(this.$route.query.code);
    }
}
</script>
