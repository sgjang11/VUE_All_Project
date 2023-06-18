<template>
    <div id="container">
        <h2>todo list</h2>
        <div class="inputBox shadow">
            <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
            <span class="addContainer" @click="addTodo">
                <i class="addBtn fas fa-plus"></i>
            </span>
        </div>
        <section>
            <transition-group name="list" tag="ul">
                <li v-for="(todoItem, index) in todoItems" :key="index" class="shadow">
                    <i class="checkBtn fas fa-check"></i>
                    {{ todoItem }}
                    <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
                        <i class="far fa-trash-alt"></i>
                    </span>
                    
                </li>
            </transition-group>
        </section>
        <button @click="clearTodo">Clear All</button>

    </div>
</template>
<script>
export default {
    data() {
        return {
            newTodoItem: '',
            todoItems: [],
            showModal: false
        };
    },
    created() {
        if(localStorage.length > 0){
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    this.todoItems.push(localStorage.key(i))
                }
            } 
        }
        console.log(this.todoItems)
    },
    methods: {
        addTodo(){
            if (this.newTodoItem.trim('')) {
                window.localStorage.setItem(this.newTodoItem, this.newTodoItem)
                this.todoItems.push(this.newTodoItem)
                this.clearInput();
            } else {
                alert('오늘의 할 일을 입력해주세요');
                document.querySelector('input').focus();
            }
        },
        removeTodo(todoItem, index){
            localStorage.removeItem(todoItem)
            this.todoItems.splice(index,1)
        },
        clearTodo(){
            localStorage.clear();
            this.todoItems=[]
        },
        clearInput() {
            this.newTodoItem = '';
        }
    },
}
</script>
<style scoped>
    .shadow {
        box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
    }
    .clearAllContainer {
        width: 8.5rem;
        height: 50px;
        line-height: 50px;
        background-color: white;
        border-radius: 5px;
        margin: 0 auto;
    }
    .clearAllBtn {
        color: #e20303;
        display: block;
    }
    input:focus {
        outline: none !important; 
        border-color: #d6a8e9; 
        box-shadow: 0 0 10px #d6a8e9;
    }

    .inputBox {
        background: rgb(231, 249, 251);
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }

    .inputBox input {
        border-style: none;
        width: 500px;
        height: 45px;
        font-size: 20px;
        padding-left: 10px;
        margin-top: 2px;
        caret-color: #8763FB;
        caret-shape: block;
    }

    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: inline-block;
        width: 7rem;
        border-radius: 0 5px 5px 0;
    }

    .addBtn {
        color: white;
        vertical-align: middle;
    }

    span:hover{
        cursor: pointer;
    }
    ul {
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
    }
    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: rgb(225, 244, 219);
        border-radius: 5px;
        font-size: 30px;
    }
    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }
    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
</style>