<template>
    <AppHeader />
    <RandomNumber />
</template>

<script>
    import AppHeader from './AppHeader.vue';
    import RandomNumber from './RandomNumber.vue';

    export default {
        components: {
            AppHeader,
            RandomNumber,
        },
    };
</script>
