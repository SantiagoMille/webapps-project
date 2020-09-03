<template>
    <span id='start'>
        <main-page></main-page>
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
import MainPage from '@/components/Main/MainPage';

export default {
    name: 'Uploads',
    components: {
        MainPage,
    }
};
</script>

<style scoped>
.margin{
    margin-bottom: 4rem !important;
}
</style>