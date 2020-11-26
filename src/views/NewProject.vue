<template>
    <span id='start'>
        <new-project-page/>
    </span>
</template>

<script>
import NewProjectPage from '@/components/Products/NewProjectPage';

export default {
    name: 'NewProject',
    components: {
        NewProjectPage,
    }
};
</script>

<style scoped>
.margin{
    margin-bottom: 4rem !important;
}
</style>