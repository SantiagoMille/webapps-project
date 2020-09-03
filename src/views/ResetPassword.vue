<template>
    <span id='start'>
        <Reset-Password-page/>
    </span>
</template>

<script>
import ResetPasswordPage from '@/components/LogIn/ResetPasswordPage';

export default {
    name: 'ResetPassword',
    components: {
        ResetPasswordPage,
    }
};
</script>

<style scoped>
.margin{
    margin-bottom: 4rem !important;
}
</style>