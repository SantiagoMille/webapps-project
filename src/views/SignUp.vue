<template>
    <span id='start'>
        <sign-up-page/>
    </span>
</template>

<script>
import SignUpPage from '@/components/SignUp/SignUpPage';

export default {
    name: 'SignUp',
    components: {
        SignUpPage,
    }
};
</script>

<style scoped>
.margin{
    margin-bottom: 4rem !important;
}
</style>