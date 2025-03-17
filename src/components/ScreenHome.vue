<template>
    <div id="screen">
        <Banner />
        <Form />
        <button id="tarefas"><router-link to="/tarefas">Ver minhas tarefas</router-link></button>
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
    div{
        text-align: center;
    }
    #screen{
        width: 100%;
        min-height: 1000px;
        background-color: #ccbada;
    }
    #tarefas{
        width: 250px;
        height: 50px;
        background-color: #c0aece;
        border-radius: 30px;
        border: none;
        transition: 0.3s;
        cursor: pointer
    }
    #tarefas a{
        font-size: 1.2em;
        text-decoration: none;
        color: black;
    }
    #tarefas:hover{
        background-color: #a391b1;
        width: 260px;
        height: 60px;
        font-weight: bold;
        margin-top: -5px;
    }
</style>