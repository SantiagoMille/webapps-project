<template>
    <span id='start'>
        <blog-page/>
    </span>
</template>

<script>
import BlogPage from '@/components/Home/BlogPage';

export default {
    name: 'Blog',
    components: {
        BlogPage,
    }
};
</script>

<style scoped>
.margin{
    margin-bottom: 4rem !important;
}
</style>