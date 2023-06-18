<template lang="">
    <div class="banner" v-if="BannerState">
    <h1>
        지금 커피 구매하시면 <br>
        머그컵을 드려요!
    </h1>
    <span class="material-icons cupIcon">
        free_breakfast
    </span>
        
    <span class="material-icons closeBtn" @click="closeBtn">
        close
    </span>
</div>
</template>
<script>
export default {
    props:{
        BannerState:Boolean
    },
    methods: {
        closeBtn(){
            this.$emit('closeBanner');
        }
    },
}
</script>
<style scoped>
    .closeBtn {
        position: absolute;
        top:2rem;
        right:2rem;
    }
    .closeBtn:hover{
        cursor: pointer;
    }
    .banner {
        background-color: rgb(107, 51, 160);
        min-height: 10rem;
        display:flex;
        justify-content: center;
        align-items: center;
        color:#fff
    }
    h1{
        padding-right:4rem;
    }
    .cupIcon {
        font-size:4rem
    }
</style>