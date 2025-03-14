<template>
    <div id="divForm">
        <h1>NOVA TAREFA</h1>
        <form id="formTask" @submit="createTask">
            <input type="text" placeholder="Digite a descrição da tarefa" v-model="descricao">
            <select name="prioridade" id="prioridade" v-model="prioridade">
                <option value="" disabled selected>Selecione a prioridade</option>
                <option v-for="p in prioridades" :key="p.id" :value="p.tipo"> {{ p.tipo }} </option>
            </select>
            <input class="botao" type="submit" value="Criar">
        </form>
        <Message :msg="msg" v-show="msg"/>
    </div>
</template>

<script>
import Message from './Message.vue'

    export default {
        name: "Form",
        components: {
            Message
        },
        data() {
            return{
                prioridades: null,
                descricao: "",
                prioridade: "",
                status: null,
                msg: null
            }
        },
        methods: {
            async getPrioridades(){
                const req = await fetch("http://localhost:3000/prioridade")
                const data = await req.json()

                this.prioridades = data
            },
            async createTask(e){
                e.preventDefault()

                const data = {
                    descricao: this.descricao,
                    priotidade: this.prioridade,
                    status: "pendente"
                } 

                const dataJson = JSON.stringify(data)

                const req = await fetch("http://localhost:3000/tarefas", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: dataJson
                })
                const res = await req.json()

                this.msg = "Tarefa criada com sucesso"
                setTimeout(() => this.msg = "", 3000);

                this.prioridade = ""
                this.descricao = ""

            }
        },
        mounted() {
            this.getPrioridades()
        }
    }
</script>

<style scoped>
    #divForm{
        max-width: 500px;
        margin: 180px auto;
    }
    #divForm h1{
        color: #867298;
        text-align: center;
        font-size: 3em;
    }
    #formTask{
        background-color: #bca9ca;
        border-radius: 30px;
        box-shadow: 2px 2px 2px #867298;
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #formTask input,
    #formTask select{
        background-color: #d0c1dc;
        width: 80%;
        padding: 15px;
        margin: 15px 0;
        font-size: 1.2em;
        border-radius: 10px;
        border: none;
        text-align: center;
        outline: none;
        transition: 0.4s;
    }
    #formTask input:hover,
    #formTask select:hover{
        background-color: #fff;
    }
    #formTask select{
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
    }
    #formTask select:focus{
        outline: none;
        box-shadow: none;
    }
    #formTask .botao{
        border-radius: 10px;
        width: 35%;
        background-color: #867298;
        margin-top: 40px;
        margin-bottom: -50px;
        color: #fff;
        font-size: 1.4em;
        cursor: pointer;
    }
    #formTask .botao:hover{
        background-color: #796789;
        border-radius: 20px;
        width: 40%;
    }
</style>