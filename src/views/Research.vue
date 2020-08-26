<template>
    <span id='start'>
        <research-page/>
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
import ResearchPage from '@/components/Home/ResearchPage';

export default {
    name: 'Research',
    components: {
        ResearchPage,
    }
};
</script>

<style scoped>
.margin{
    margin-bottom: 4rem !important;
}
</style>