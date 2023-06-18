<template>
    <div id="container">
        <div class="tit">
            {{coffeeDataDetail.title}}
        </div>
        <div class="price">
            {{coffeeDataDetail.price}}
        </div>
        <div class="img">
            <img :src="coffeeDataDetail.image">
        </div>
        <div class="txt">
            {{coffeeDataDetail.text}}
        </div>
    </div>
</template>
<script>
import coffeeData from '@/data/coffee';
export default {
    data() {
        const coffeeId = this.$route.params.coffeeId;
        return {
            coffeeDataDetail: coffeeData[coffeeId]
        };
    },
}
</script>
<style>
    .tit {
        font-size:3rem ;
        font-weight: 600;
        position: relative;
        color:rgb(107, 51, 160)
    }
    .tit::after {
        content:"";
        display: block;
        width:10%;
        margin:2rem auto;
        height: .3rem;
        background-color:#ccc
    }
    .price {
        font-size: 2rem;
    }
    .img {
        border:1px solid #ddd;
        padding:5rem;
        max-width: 60%;
        margin:3rem auto
    }
    .img img{
        width: 100%;
    }
    .txt {
        font-size: 1.6rem;
        margin-top:3rem;
        color:#5c5c5c;
        text-indent: 2rem;
        /* text-align: ; */
        line-height:1.8
    }    
</style>