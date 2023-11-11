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
    import MessageContainer from './MessageContainer.vue';

    export default {
        components: {
            AppHeader,
            RandomNumber,
            LoginForm,
            MessageContainer,
        },
    };
</script>
