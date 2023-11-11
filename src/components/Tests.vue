<template>
    <AppHeader />
    <RandomNumber />
    <LoginForm />
</template>

<script>
    import AppHeader from './AppHeader.vue';
    import RandomNumber from './RandomNumber.vue';
    import LoginForm from './LoginForm.vue';

    export default {
        components: {
            AppHeader,
            RandomNumber,
            LoginForm,
        },
    };
</script>
