<template>
    <div class="conteiner">
        <Header/>
        <Screen />
        <Services/>
        <About/>
        <Information />
        <Stock/>
        <All />
        <Maps/>
        <Menu />
        <Footer />
    </div>
</template>

<script>
    import VueRouter from 'vue-router'
    import Vue from 'vue'
    import { yandexMap, ymapMarker } from 'vue-yandex-maps'
    
    Vue.use(VueRouter);

    const router = new VueRouter({
        mode: 'history',
        routes: [],
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

    const settings = {
        apiKey: '',
        lang: 'ru_RU',
        coordorder: 'latlong',
        version: '2.1'
    };
    
    export default {
        name: "Main",
        data() {
            return {
                logo: "./site/app/img/logo.png",
                imageServices: "./site/app/img/services.jpg",
                imageBg: "./site/app/img/bg_expert.jpg",
                image1: "./site/app/img/1.png",
                image2: "./site/app/img/2.png",
                image3: "./site/app/img/3.png",
                image4: "./site/app/img/4.png",
                image5: "./site/app/img/5.png",
                image6: "./site/app/img/6.png",
                imageStock: "./site/app/img/location5.png",
                col: "#ff0000"
            }
        },
        components: {
            yandexMap,
            ymapMarker
        },
        router: router
    }
</script>

<style scoped>
    .conteiner {
        padding: 0;
    }
</style>