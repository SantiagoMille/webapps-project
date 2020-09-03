<template>
    <span id='start'>
        <Profile-page/>
        <v-btn
            class='margin'
            absolute
            fixed
            fab
            bottom
            right
            @click="$vuetify.goTo('#start')">
            <v-icon>mdi-arrow-up</v-icon>
        </v-btn>
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