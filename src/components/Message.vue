<template>
    <div id="div-mensagem">
        <p>{{ msg }}</p>
    </div>
</template>

<script>
    export default {
        name: "Message",
        props: {
            msg: null
        }
    }
</script>

<style scoped>
    #div-mensagem{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #cce5cc;
        padding: 10px;
        font-size: 1.2em;
        border-radius: 15px;
        color: black;
        margin-top: 40px;
    }
</style>