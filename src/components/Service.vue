<template>
    <div id="container">
        <h2>service</h2>
        <div class="service_wrap">
            <nav >
                <a href="#" v-for="(data, index) in serviceData" :key="index" @click.prevent="tabOpen(index)" v-bind:class="{On:index===cnt}">{{data.title}}</a>
            </nav>
            <div class="service_content" v-for="(data, index) in serviceData" :key="index">
                <div v-if="cnt==index">
                    <h4>
                        {{data.content}}
                    </h4>
                    <p>
                        {{data.call}}
                    </p>
                    <span class="material-icons">
                        {{data.icon}}
                    </span>
                    <button class="svc_btn">
                        {{data.title}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import serviceData from '@/data/service';
export default {
    data() {
        return {
            serviceData: serviceData,
            cnt:0,
            On:''
        };
    },
    methods: {
        tabOpen(index){
            this.cnt=index;
        }
    },
}
</script>
<style>
    .service_wrap nav {
        display: flex;
        justify-content: space-around;
        height: 5rem;
        align-items: center;
    }
    .service_wrap nav a {
        display: block;
        height: 100%;
        width: 100%;
        line-height: 5rem;
        border-bottom: 3px solid rgb(224, 224, 224)
    }
    .service_wrap nav a.On {
        background-color: rgb(244, 233, 255);
        color: rgb(97, 47, 143);
        border-bottom: 3px solid rgb(97, 47, 143)
    }
    .service_content>div {
        height: 50rem;
        border: 1px solid rgb(224, 224, 224);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 5rem;
    }
    .service_content>div p {
        font-weight: 600;
        font-size: 3rem;
    }
    .service_content>div h4 {
        font-size: 1.6rem;
        font-weight: 200;
    }
    .service_content>div span {
        font-size: 10rem;
        display: inline-block;
        margin: 3rem 0;
        color: rgb(97, 47, 143)
    }
    .svc_btn {
        border: none;
        padding: .5rem 2rem;
        border-radius: 3rem;
        cursor: pointer;
    }
</style>