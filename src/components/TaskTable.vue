<template>
    <div id="msg">
        <Message :msg="msg" v-show="msg"/>
    </div>
    <div id="divTable">
        <div>
            <div id="table">
                <div class="task-id"> # </div>
                <div class="task-desc"> Descrição da tarefa </div>
                <div> Prioridade </div>
                <div> Status </div>
                <div> Ações </div>
            </div>
        </div>
        <div id="table-rows">
            <div class="table-row" v-for="tarefa in tarefas" :key="tarefa.id">
                <div class="task-id"> {{ tarefa.id }} </div>
                <div class="task-desc"> {{ tarefa.descricao }} </div>
                <div> {{ tarefa.prioridade }} </div>
                <div> {{ tarefa.status }} </div>
                <div>
                    <button class="concluir-btn" @click="concluirTareda(tarefa.id)">✔️</button>
                    <button class="delete-btn" @click="exluirTarefa(tarefa.id)">❌</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Message from './Message.vue';

    export default {
        name: "TaskTable",
        components: {
            Message
        },
        data(){
            return{
                tarefas: [],
                msg: ""
            }
        },   
        methods:{
            async getTarefas(){
                const req = await fetch("http://localhost:3000/tarefas")

                const data = await req.json();

                this.tarefas = data;

            },
            async exluirTarefa(id){
                const req = await fetch(`http://localhost:3000/tarefas/${id}`, {
                    method: "DELETE"
                })

                const res = await req.json()

                this.msg = "Tarefa excluída com sucesso"
                setTimeout(() => this.msg = "", 3000);

                this.getTarefas()
            }
        },
        mounted(){
            this.getTarefas()
        }
    }
</script>

<style scoped>
    #msg{
        position: absolute;
        left: 50%;
        top: 80px;
        transform: translateX(-50%);
    }
    #divTable{
        border-radius: 30px;
        background-color: #cabad6;
        max-width: 1000px;
        margin: 0 auto;
        min-height: 100vh;
    }
    #table,
    #table-rows,
    .table-row{
        display: flex;
        flex-wrap: wrap;
    }
    #table{
        font-weight: bold;
        padding: 20px 12px;
        border-bottom: 7px solid #bca9ca;
        font-size: 1.3em;
    }
    #table div,
    .table-row div{
        width: 16%;
    }
    .table-row{
        width: 100%;
        padding: 12px;
        border-bottom: 3px solid #bca9ca;
        border-radius: 10px;
    }
    #table .task-desc,
    .table-row .task-desc{
        width: 40%;
    }
    #table .task-id,
    .table-row .task-id{
        width: 12%;
    }
    .concluir-btn{
        background-color: #bca9ca;
        color: black;
        font-weight: bold;
        border: 2px solid #bca9ca;
        border-radius: 10px;
        padding: 6px;
        font-size: 16px;
        margin: 0 10px;
        margin-left: -10px;
        cursor: pointer;
        transition: .5s;
    }
    .concluir-btn:hover{
        background-color: #cabad6;
        color: rgb(89, 142, 28);
    }
    .delete-btn{
        background-color: rgb(255, 172, 172);
        color: black;
        font-weight: bold;
        border: 2px solid rgb(255, 172, 172);
        border-radius: 10px;
        padding: 8px;
        font-size: 14px;
        margin: 0 auto;
        cursor: pointer;
        transition: .5s;
    }
    .delete-btn:hover{
        background-color: #cabad6;
        color: rgb(255, 80, 80);
    }

</style>