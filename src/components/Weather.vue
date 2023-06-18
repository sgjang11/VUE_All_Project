<template>
    <div id="container">
        <h1>Todays Reports</h1>
        <img :src="icon">
        <h2>
            <span>{{city}}</span>'s Weather<br>
            <b>{{description}}</b>
        </h2>
        <p class="temp">
            temp: {{temp}} <span>&#176;</span>
        </p>
        <form v-on:submit.prevent="getWeatherData">
            <h3><span>도시</span>를 입력하세요.</h3>
            <input type="text" placeholder="도시이름" v-model="city">
        </form>
    </div>
</template>
<script>
import weatherData from '@/data/weather';
import axios from 'axios';
export default {
    data() {
        return {
            weatherData: weatherData,
            icon: '',
            description: '',
            main: '',
            temp: '',
            city: ''
        };
    },
    methods: {
        getWeatherData(){
            if(this.city.trim('')){
                axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=3dac89683696dfd7505b5b0b64a5143e&units=metric`)
                    .then((result) => {
                            let data = result.data;
                            this.icon=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
                            this.description=data.weather[0].description;
                            this.main=data.weather[0].main;
                            this.temp=data.main.temp;

                            const container = document.querySelector('#container');

                            for (let i = 0; i < this.weatherData.length; i++) {
                                if(this.main == this.weatherData[i].main){
                                    container.style.background=this.weatherData[i].background;
                                };
                            }
                    })
                    .catch((error) => {
                        console.log(error)
                    });
            }else{
                alert('도시를 입력해주세요.')
            }
        }
    },
}
</script>
<style scoped>
    #container {
        text-align: center;
        color: #fff;
        background: rgb(37, 46, 148);
        background: radial-gradient(circle,
            rgba(37, 46, 148, 1) 0%,
            rgba(0, 0, 0, 1) 100%);
        min-height: 500px;
        text-align: center;
        padding: 5vh 0;
        position: relative;
    }

    h1 {
        font-size: 30px;
        font-weight: 300;
    }

    form {
        bottom: 0;
        position: absolute;
        width: 100%;
        border-radius: 20px 20px 0 0;
        background-color: #fff;
        box-shadow: 0 -20px 20px rgba(0, 0, 0, 0.144);
        color: #000;
        padding: 20px 0;
    }

    h2 {
        font-weight: 200;
        font-size: 30px;
        margin-bottom: 0;
        background-color: transparent;
    }

    p {
        font-size: 20px;
    }

    span {
        font-weight: 400;
    }

    input {
        border-left: none;
        border-right: none;
        border-top: none;
        display: inline-block;
        line-height: 1.6;
        font-size: 20px;
        padding-top: 20px;
        text-align: center;
        outline: none;
    }

    img {
        width: 100px;
    }
</style>