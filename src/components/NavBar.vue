<template>
  <nav id="navbar">
    <router-link to="/">Home</router-link>  
    <router-link to="/tarefas">Tarefas</router-link>
  </nav>
</template>

<script>
    export default {
        name: "NavBar"   
    }
</script>

<style scoped>
    #navbar{
        background-color: #867298;
        padding: 10px 60px;
        display: flex;
        width: 100%;
        height: 100px;
        justify-content: center;
        align-items: center;
    }
    #navbar a{
        color: #fff;
        text-decoration: none;
        font-size: 2.5em;
        margin: 100px;
        padding: 10px;
        transition: 1s;
        border-radius: 20px;
    }
    #navbar a:hover {
        transform: translateY(-5px);
        transition: transform 0.3s ease-in-out;
        background-color: #8f7ba0;
    }
</style>