<template>
    <span id='start'>
        <cloned-page></cloned-page>
        
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