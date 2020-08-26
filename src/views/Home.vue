<template>
    <span id='start'>
        <home-page></home-page>
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
import HomePage from '@/components/Home/HomePage';

export default {
    name: 'Home',
    components: {
        HomePage,
    }
};
</script>

<style scoped>
.margin{
    margin-bottom: 4rem !important;
}
</style>