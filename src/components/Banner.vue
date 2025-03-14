<template>
    <div id="banner">    
        <img src="../../public/img/caderno.png" alt="caderninho">
        <p>
            Organizar suas tarefas e afazeres nunca foi tão fácil
        </p>
        <img src="../../public/img/caderno.png" alt="caderninho">
    </div>
</template>

<script>
    export default {
        name: "Banner"
    }
</script>

<style scoped>
    #banner{
        width: 100%;
        height: 250px;
        padding: 50px;
        padding-top: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    #banner img{
        height: 250px;
    }
    #banner p{
        margin: 10px;
        padding: 20px 30px;
        background: #bca9ca;
        font-size: 2.8em;
        color: #fff;
        border-radius: 40px;
        cursor: default;
    }
</style>