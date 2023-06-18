<template>
  <div id="app">
    <Banner :BannerState="BannerState" @closeBanner="closeBanner"/>
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Banner from '@/components/common/Banner';
export default {
  name: 'App',
  components:{
    Header,
    Banner
  },
  data() {
    return {
      BannerState: true
    }
  },
  methods: {
    closeBanner(){
      this.BannerState=false;
    }
  },
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
  }
  html, body {
    font-size: 62.5%;
  }
  a {
    text-decoration: none;
    color: #2c3e50;
    font-size: 1.4rem;
  }
  #container {
    text-align: center;
    margin: 3rem 20px 0;
  }
  h2 {
    margin-bottom: 20px;
    font-weight: 300;
    font-size: 2.3rem;
    text-transform: uppercase;
    background-color: #d798fc;
    padding: 1rem 0;
    color: #fff
  }
  .in_wrap {
    justify-content: space-around;
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
  }
  img {
    width: 200px;
    height: auto;
  }
  h3 {
    color: gray;
    font-size: 1.6rem;
    margin: 3rem 0 1rem;
    position: relative
  }
  h3:after {
    display: block;
    content: "";
    width: 10%;
    height: .5rem;
    background-color: gainsboro;
    margin: 1rem auto
  }
    button{
        border: none;
        color: #fff;
        border-radius: 2rem;
        padding: 0 5rem;
        display: inline-block;
        margin-top: 3rem;
        line-height: 4rem;
        height: 4rem;
        cursor: pointer;
        background-color: #6b33a0;
    }  
</style>
