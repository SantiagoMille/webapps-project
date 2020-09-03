<template>
    <span id='start'>
        <uploads-page/>
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
import UploadsPage from '@/components/Products/UploadsPage';

export default {
    name: 'Uploads',
    components: {
        UploadsPage,
    }
};
</script>

<style scoped>
.margin{
    margin-bottom: 4rem !important;
}
</style>