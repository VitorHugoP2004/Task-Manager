<template>
    <div>
        <TaskTable />
    </div>
</template>

<script>
import TaskTable from './TaskTable.vue';

    export default {
        name: "ScreenTasks",
        components: {
            TaskTable
        }
    }
</script>

<style scoped>
    div{
        padding: 80px;
        background-color: #bca9ca;
    }
</style>