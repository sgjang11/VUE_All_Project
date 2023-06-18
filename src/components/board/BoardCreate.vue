<template>
    <div id="container">
        <h2>게시판 {{index !== undefined ? '수정하기' : '글쓰기'}}</h2>
        <div class="container">
            <input type="text" v-model="writer" placeholder="글쓴이">
            <input type="text" v-model="title" placeholder="제목">
            <textarea cols="30" rows="10"  v-model="content" placeholder="본문"></textarea>
            <input type="text" v-model="image" placeholder="이미지">
            <div>
                <img :src="image">
            </div>
        </div>
        <button @click="index !== undefined ? updateBoard() : writeBorad()">
            {{index !== undefined ? '수정하기' : '글쓰기'}}
        </button>
        <button @click="goHome">HOME</button>
    </div>
</template>
<script>
import boardData from '@/data/board';
export default {
    name: 'BoardCreate',
    data() {
        const index = this.$route.params.boardId
        return {
            boardData: boardData,
            index:index,
            writer: index !== undefined ? boardData[index].writer : '',
            title: index !== undefined ? boardData[index].title : '',
            content: index !== undefined ? boardData[index].content : '',
            image: index !== undefined ? boardData[index].image : ''
        };
    },
    methods: {
        goHome(){
            this.$router.push({ path: '/board' });
        },
        writeBorad(){
            this.boardData.push({
                writer:this.writer,
                title:this.title,
                content:this.content,
                image:this.image
            })
            this.goHome();
        },
        updateBoard(){
            boardData[this.index].writer = this.writer;
            boardData[this.index].title = this.title;
            boardData[this.index].content = this.content;
            boardData[this.index].image = this.image;
            this.goHome();
        }
    }
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
    input,
    textarea {
        border: 0;
        width: 100%;
        display: block;
        background-color: #f4faff;
        line-height: 2;
        text-indent: 20px;
        margin-bottom: 10px
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