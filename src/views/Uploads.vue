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
            v-on:click="change()">
            <v-icon>mdi-plus</v-icon>
        </v-btn>
    </span>
</template>

<script>
import UploadsPage from '@/components/Products/UploadsPage';
import router from '../router'

export default {
    name: 'Uploads',
    components: {
        UploadsPage,
    },
    methods:{
        change(){
            router.push('/newproject')
        }
    }
};
</script>

<style scoped>
.margin{
    margin-bottom: 4rem !important;
}
</style>