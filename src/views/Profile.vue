<template>
    <span id='start'>
        <Profile-page/>
        
    </span>
</template>

<script>
import ProfilePage from '@/components/Profile/ProfilePage';

export default {
    name: 'Profile',
    components: {
        ProfilePage,
    }
};
</script>

<style scoped>
.margin{
    margin-bottom: 4rem !important;
}
</style>