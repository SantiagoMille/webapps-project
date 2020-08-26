<template>
    <span id='start'>
        <projects-page/>
    </span>
</template>

<script>
import ProjectsPage from '@/components/Home/ProjectsPage';

export default {
    name: 'Projects',
    components: {
        ProjectsPage,
    }
};
</script>

<style scoped>
.margin{
    margin-bottom: 4rem !important;
}
</style>