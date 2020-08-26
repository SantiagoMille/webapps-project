<template>
    <span id='start'>
        <interest-page/>
    </span>
</template>

<script>
import InterestPage from '@/components/Home/InterestPage';

export default {
    name: 'Projects',
    components: {
        InterestPage,
    }
};
</script>

<style scoped>
.margin{
    margin-bottom: 4rem !important;
}
</style>