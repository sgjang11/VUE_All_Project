<template>
    <div id="container">
        <h2>coffe list</h2>
        <div class="in_wrap">
            <div v-for="(coffee, index) in coffeeData" :key="index" class="content" @click="goCoffeeDetail(index)">
                <h3>
                    {{coffee.title}}
                </h3>
                <img :src="coffee.image">
            </div>
        </div>
        <button class="more" @click="moreCoffee">더보기</button>
    </div>
</template>
<script>
import coffeeData from '@/data/coffee';
import axios from 'axios';
export default {
    data() {
        return {
            coffeeData: coffeeData,
            moreCoffeeList: 0
        };
    },
    methods: {
        goCoffeeDetail(index){
            this.$router.push({ 
                name: 'CoffeeDetail', 
                params:{
                    coffeeId:index
                }
            });
        },
        moreCoffee(){
            axios.get(`https://joonsol.github.io/data/more${this.moreCoffeeList}.json`)
                .then((response) => {
                    this.coffeeData.push(response.data);
                    this.moreCoffeeList++;
                    if(this.moreCoffeeList == 2){
                        this.moreCoffeeList=0;
                    }
                })
                ;
        }
    },
}
</script>
<style>
  
</style>