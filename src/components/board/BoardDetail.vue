<template>
    <div id="container">
        <h2>상세페이지</h2>
        <div class="container">
            <div class="f_wrap">
                <div class="title">
                    {{boardData.title}}
                </div>
                <div class="writer">
                    {{boardData.writer}}
                </div>
            </div>
            <div class="content">
                {{boardData.content}}<br><br>
                <img :src="boardData.image" >
            </div>
            <button @click="goUpdate">수정</button>
            <button @click="deleteBoard">삭제</button>
            <button @click="goHome">HOME</button>
        </div>
    </div>
</template>
<script>
import boardData from '@/data/board';
export default {
    data() {
        const index = this.$route.params.boardId
        return {
            boardData: boardData[index],
            index:index
        };
    },
    methods: {
        goUpdate(){
            this.$router.push({
                name: 'BoardCreate',
                params: { boardId: this.index }
            });
        },
        deleteBoard(){
            boardData.splice(this.index, 1);
            this.goHome();
        },
        goHome(){
            this.$router.push({ path: '/board' });
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