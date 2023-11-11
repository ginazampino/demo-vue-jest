<template>
    <AppHeader />
    <RandomNumber />
    <LoginForm />
    <MessageDisplay />
</template>

<script>
    import AppHeader from './AppHeader.vue';
    import RandomNumber from './RandomNumber.vue';
    import LoginForm from './LoginForm.vue';
    import MessageDisplay from './MessageDisplay.vue';

    export default {
        components: {
            AppHeader,
            RandomNumber,
            LoginForm,
            MessageDisplay,
        },
    };
</script>
