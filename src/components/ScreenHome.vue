<template>
    <div id="screen">
        <Banner />
        <Form />
    </div>
</template>

<script>
import Banner from './Banner.vue';
import Form from './Form.vue';

    export default {
        name: "ScreenHome",
        components: {
            Banner,
            Form
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