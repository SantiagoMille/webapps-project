<template>
    <span id='start'>
        <cloned-page></cloned-page>
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
import ClonedPage from '@/components/Products/ClonedPage';

export default {
    name: 'Cloned',
    components: {
        ClonedPage,
    }
};
</script>

<style scoped>
.margin{
    margin-bottom: 4rem !important;
}
</style>