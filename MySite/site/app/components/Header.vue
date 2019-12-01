<template>
    <div class="main">
        <div class="row-fluid">
            <ul>
                <li>
                    <router-link to="/">
                        <img :src="image" alt="logo">
                    </router-link>
                </li>
                <li class="menu">
                    
                    <router-link to="#about" @click="scroll(0, 400)">О CMD</router-link>
                    <router-link to="#services">Услуги</router-link>
                    <router-link to="#stock">Акции</router-link>
                    <router-link to="#maps">Контакты</router-link>
                </li>
                <li class="zaiavka">
                    <p>
                        <span class="telephone">+7 (496) 769-92-15</span><br>
                        <span class="address">Свердлова, 21</span>
                    </p>
                </li>
                <li class="zaiavka">
                    <p>
                        <span class="telephone">+7 (496) 740-29-33</span><br>
                        <span class="address">Ленинградская, 11</span>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Main from "./Main.vue"
    import Services from "./Services.vue"
    import About from "./About.vue"
    import Stock from "./Stock.vue"
    import Maps from "./Maps.vue"
    import VueRouter from 'vue-router'
    import Vue from 'vue'
    import use from 'vue-use'
    import VueScrollactive from 'vue-scrollactive'
    import ScrollSpy from 'vue-scrollactive'
    
    Vue.use(VueRouter);
    Vue.use(VueScrollactive);
    Vue.use(ScrollSpy);
    
    const routes = [
        { path: '/', component: Main },
        { path: '/services', component: Services},
        { path: '/about', component: About },
        { path: '/stock', component: Stock },
        { path: '/maps', component: Maps }
    ];

    const router = new VueRouter({
        mode: 'history',
        routes: routes,
        scrollBehavior (to, from, savedPosition) {
            if (to.hash) {
                return { selector: to.hash }
            } else if (savedPosition) {
                return savedPosition;
            } else {
                return { x: 0, y: 0 }
            }
        }
    });
    
    export default {
        name: "Footer",
        data () {
            return {
                image: "./site/app/img/logo.png"
            }
        },
        components: {
            Main,
            Services,
            About,
            Stock,
            Maps
        },
        router: router,
        methods: {
            scroll(to, from) {
                window.scrollTo(to, from);
            }
        }
    }
</script>

<style scoped>
    .main {
        position: relative;
        max-width: 1000px;
        margin: 0 auto;
    }
    .row-fluid {
        position: relative;
        z-index: 1000;
        width: 100%;
    }
    ul {
        display: table;
        width: 95%;
        padding: 0;
        margin: 0 0 10px 25px;
    }
    li {
        display: table-cell;
        vertical-align: middle;
        line-height: 20px;
    }
    .zaiavka {
        position: relative;
        padding: 10px 0;
    }
    p {
        font-family: 'DinCy';
        font-size: 20px;
        position: relative;
        top: 8px;
        vertical-align: middle;
        margin: 0 0 10px;
    }
    .address {
        font-size: 12px;
        color: #a0a0a0;
    }
    .menu {
        position: relative;
        padding: 10px 0;
        text-align: center;
    }
    a {
        display: inline-block;
        vertical-align: middle;
        margin: 0 10px;
        font-size: 18px;
        color: #000;
        font-family: 'HelvetiThin';
        text-decoration: none;
    }
</style>