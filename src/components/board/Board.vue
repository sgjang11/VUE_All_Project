<template>
    <div id="container">
        <h2>자유게시판</h2>
        <div class="container" v-for="(data, index) in boardData" :key="index" @click="boardDetail(index)">
            <div class="f_wrap">
                <div class="title">
                    {{data.title}}
                </div>
                <div class="writer">
                    {{data.writer}}
                </div>
            </div>
            <div class="content">
                    {{data.content}}
            </div>
        </div>
        <button @click="goWrite">글쓰기</button>
    </div>
</template>
<script>
import boardData from '@/data/board';
export default {
    data() {
        return {
            boardData: boardData,
        };
    },
    methods: {
        goWrite(){
            this.$router.push({
                name: 'BoardCreate'
            });
        },
        boardDetail(index){
            this.$router.push({
                name: 'BoardDetail',
                params: { boardId: index }
            });
        }
    },
}
</script>
<style scoped>
    button {
        border: 0;
        padding: 0 20px;
        line-height: 2;
        font-weight: 600;
        background-color: #2c3e50;
        color: #fff;
        margin: 10px 5px;
        display: inline-block;
        cursor: pointer;
    }
    .container {
        margin: 20px 30px
    }
    .f_wrap {
        display: flex;
        flex-wrap: wrap;
        background-color: rgb(241, 241, 241);
        padding: 10px 20px;
        text-align: left;
    }
    .title {
        flex-grow: 9;
        font-weight: 999;
    }
    .writer {
        flex-grow: 1;
    }
    .content {
        padding: 10px 20px;
        background-color: aliceblue;
        min-height: 10vw;
    }
    img{
        max-width: 40vw;
    }
</style>