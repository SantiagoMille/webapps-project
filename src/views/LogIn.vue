<template>
    <span id='start'>
        <Log-in-page/>
    </span>
</template>

<script>
import LogInPage from '@/components/LogIn/LogInPage';

export default {
    name: 'LogIn',
    components: {
        LogInPage,
    }
};
</script>

<style scoped>
.margin{
    margin-bottom: 4rem !important;
}
</style>