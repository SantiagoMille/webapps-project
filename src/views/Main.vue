<template>
    <span id='start'>
        <main-page></main-page>
        
    </span>
</template>

<script>
import MainPage from '@/components/Main/MainPage';

export default {
    name: 'Main',
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