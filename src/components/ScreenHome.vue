<template>
    <div id="screen">
        <Banner />
    </div>
</template>

<script>
import Banner from './Banner.vue';

    export default {
        name: "ScreenHome",
        components: {
            Banner
        }
    }
</script>

<style scoped>
    #screen{
        width: 100%;
        height: 1000px;
        background-color: #ccbada;
    }
</style>