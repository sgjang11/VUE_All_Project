<template>
    <header>
        <h1>
            <router-link to="/">Vue Study</router-link>
        </h1>
        
        <nav>
            <router-link to="/">product</router-link>
            <router-link to="/board">board</router-link>
            <router-link to="/weather">weather</router-link>
            <router-link to="/todoList">todo</router-link>
            <router-link to="/service">service</router-link>
        </nav>
    </header>
</template>
<script>
export default {
    
}
</script>
<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2rem;
        border-bottom: 1px solid #eee;
        border-top:3px solid rgb(107, 51, 160);
    }
    h1 a {
        font-size: 3rem;
        text-transform: uppercase;
    }
    nav a {
        text-transform: uppercase;
        font-size: 1.6rem;
        padding: 0 2rem;
    }
    nav .router-link-exact-active.router-link-active {
        color: blueviolet
    }
    @media screen and (max-width:70rem) {
        header {
        display: block;
        padding: 0;
        text-align: center;
        }
        header h1 {
        padding: 1.2rem;
        }
        nav {
        text-align: center;
        width: 100%;
        border-top: 1px solid #eee;
        padding: .5rem 0;
        }
        nav a {
        font-size: 1.3rem;
        }
    }    
</style>