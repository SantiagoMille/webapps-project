<template>
    <span id='start'>
        <search-page></search-page>
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
import SearchPage from '@/components/Products/SearchPage';

export default {
    name: 'Search',
    components: {
        SearchPage,
    }
};
</script>

<style scoped>
.margin{
    margin-bottom: 4rem !important;
}
</style>