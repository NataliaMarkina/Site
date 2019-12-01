<template>
    <div class="conteiner">
        <div id="main" class="main">
                <ul>
                    <li>
                        <router-link to="/">
                            <img :src="logo" alt="logo">
                        </router-link>
                    </li>
                    <router-view></router-view>
                    <li class="menu">
                        <router-link to="#about">О CMD</router-link>
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
        
        <Screen />

        <div id="services" class="services">
            <h2>
                <span>Услуги</span>
            </h2>
            <p>Оказываем услуги для вашего здоровья</p>
            <div class="row-fluid">
                <div class="span4">
                    <p class="lin">
                        <em :style="{ backgroundImage: `url('${imageServices}')` }"></em>
                        <a href="/site/app/therapy.html">Терапия</a>
                    </p>
                    <p>Диагностика, лечение и профилактика общих заболеваний .</p>
                </div>
                <div class="span4">
                    <p class="lin">
                        <em :style="{ backgroundImage: `url('${imageServices}')` }"></em>
                        <a href="/site/app/vaccination.html">Вакцинация</a>
                    </p>
                    <p>Введение в организм человека антигенного вещества, способного вызвать иммунитет к определенной болезни</p>
                </div>
                <div class="span4">
                    <p class="lin">
                        <em :style="{ backgroundImage: `url('${imageServices}')` }"></em>
                        <a href="/site/app/pediatrics.html">Педиатрия</a>
                    </p>
                    <p>Диагностика, лечение и профилактика заболеваний детей от рождения до 18 лет</p>
                </div>
            </div>
            <div class="row-fluid">
                <div class="span4">
                    <p class="lin">
                        <em :style="{ backgroundImage: `url('${imageServices}')` }"></em>
                        <a href="/site/app/gynecology.html">Гинекология</a>
                    </p>
                    <p>Диагностика и лечение заболеваний женской репродуктивной системы</p>
                </div>
                <div class="span4">
                    <p class="lin">
                        <em :style="{ backgroundImage: `url('${imageServices}')` }"></em>
                        <a href="/site/app/ultrasound.html">УЗИ</a>
                    </p>
                    <p>Ультразвуковая диагностика заболеваний</p>
                </div>
                <div class="span4">
                    <p class="lin">
                        <em :style="{ backgroundImage: `url('${imageServices}')` }"></em>
                        <a href="/site/app/urology.html">Урология</a>
                    </p>
                    <p>Диагностика и лечение заболеваний мочевой системы</p>
                </div>
            </div>
            <div class="row-fluid">
                <div class="span4">
                    <p class="lin">
                        <em :style="{ backgroundImage: `url('${imageServices}')` }"></em>
                        <a href="/site/app/ecg.html">ЭКГ, ЭЭГ</a>
                    </p>
                    <p>Функциональная диагностика заболеваний</p>
                </div>
                <div class="span4">
                    <p class="lin">
                        <em :style="{ backgroundImage: `url('${imageServices}')` }"></em>
                        <a href="/site/app/allergology.html">Аллергология/Иммунология</a>
                    </p>
                    <p>Диагностика, лечение и профилактика аллергических реакций и заболеваний</p>
                </div>
                <div class="span4">
                    <p class="lin">
                        <em :style="{ backgroundImage: `url('${imageServices}')` }"></em>
                        <a href="/site/app/endocrinology.html">Эндокринология</a>
                    </p>
                    <p>Диагностика заболеваний желез внутренней секреции (эндокринных желез).</p>
                </div>
            </div>
        </div>

        <div id="about" :style="{ backgroundImage: `url('${imageBg}')` }">
            <div class="about-main">
                <h2>
                    <b>CMD</b>
                    – эксперт в области лабораторной диагностики
                </h2>
                <div class="row-fluid">
                    <div class="span4">
                        <div class="image_expert">
                            <img :src="image1" alt="">
                        </div>
                        <p>Диагностика на основе передовых методов и уникальных разработок</p>
                    </div>
                    <div class="span4">
                        <div class="image_expert">
                            <img :src="image2" alt="">
                        </div>
                        <p>Исследования, полностью отвечающие мировым стандартам и принципам доказательной медицины</p>
                    </div>
                    <div class="span4">
                        <div class="image_expert">
                            <img :src="image3" alt="">
                        </div>
                        <p>Широкий спектр сертифицированных тестов</p>
                    </div>
                </div>
                <div class="row-fluid">
                    <div class="span4">
                        <div class="image_expert">
                            <img :src="image4" alt="">
                        </div>
                        <p>Многоуровневый контроль качества на всех этапах</p>
                    </div>
                    <div class="span4">
                        <div class="image_expert">
                            <img :src="image5" alt="">
                        </div>
                        <p>Оптимальные сроки получения результатов</p>
                    </div>
                    <div class="span4">
                        <div class="image_expert">
                            <img :src="image6" alt="">
                        </div>
                        <p>Доступные цены, социальные и дисконтные программы, акции и скидки</p>
                    </div>
                </div>
            </div>
        </div>
        
        <Information />

        <div id="stock" class="stock">
            <h2>Акции</h2>
            <div class="stock-main">
                <div class="row-fluid">
                    <div class="text">
                        <h1>
                            <img :src="imageStock" alt="" class="img">
                        </h1>
                        <p> </p>
                        <h2>
                            <strong>ПОЛУЧАЙТЕ ПОДАРКИ!</strong>
                        </h2>
                        <p>Получите <span :style="{ color: col }">скидку 5%</span> на все лабораторные услуги CMD в г. Подольске.</p>
                        <p>Для участия в акции назовите администратору клиники кодовое слово «Здоровье».</p>
                        <p>Более подробную информацию об акции Вы можете узнать <br>у наших сотрудников по телефону
                            <strong>+7 (496) 740-29-33</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
        <All />

        <div id="maps" class="maps">
            <h2>Карта</h2>
            <yandex-map
                    :settings="settings"
                    :coords="[55.431177, 37.544737]"
                    zoom="13"
                    style="display: block; width: 100%; height: 450px;"
                    :cluster-options="{1: {clusterDisableClickZoom: true}}"
                    :behaviors="['drag', 'scrollZoom', 'dblClickZoom']"
                    :controls="['trafficControl', 'fullscreenControl', 'geolocationControl', 'rulerControl', 'typeSelector', 'zoomControl']"
                    map-type="map"
                    @map-was-initialized="initHandler"
                    scroll-zoom="false"
            >

                <ymap-marker
                        marker-type="placemark"
                        :coords="[55.423749, 37.539149]"
                        :balloon="{body: 'CMD - Центр Молекулярной Диагностики. г. Подольск, ул. Свердлова, д. 21 Телефон (4967) 699-215'}"
                        :icon="{color: 'lightblue'}"
                        cluster-name="1"

                ></ymap-marker>

                <ymap-marker
                        marker-type="placemark"
                        :coords="[55.425486, 37.497333]"
                        :balloon="{body: 'CMD - Центр Молекулярной Диагностики. г. Подольск, ул. Ленинградская д. 11 пом. 6. Телефон (4967) 40-29-33'}"
                        :icon="{color: 'blue'}"
                        cluster-name="1"
                ></ymap-marker>

            </yandex-map>
        </div>
        
        <Menu />
        <Footer />
    </div>
</template>

<script>
    import Screen from "./Screen.vue";
    import Information from "./Information.vue";
    import All from "./All.vue";
    import Menu from "./Menu.vue";
    import Footer from "./Footer.vue";
    import VueRouter from 'vue-router'
    import Vue from 'vue'
    import VueScrollactive from 'vue-scrollactive'
    import ScrollSpy from 'vue-scrollactive'
    import { yandexMap, ymapMarker } from 'vue-yandex-maps'
    
    Vue.use(VueRouter);
    Vue.use(VueScrollactive);
    Vue.use(ScrollSpy);

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
            Screen,
            Information,
            All,
            Menu,
            Footer,
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
    
    #main {
        position: relative;
        max-width: 1000px;
        margin: 0 auto;
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
    .zaiavka > p {
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
    .menu > a:hover {
        text-decoration: underline;
    }

    #services {
        position: relative;
        padding: 50px 0 110px;
        max-width: 1000px;
        margin: 0 auto;
    }
    .services > h2 {
        text-align: center;
        font-family: 'HelvetiThin';
        font-weight: 100;
        font-size: 50px;
        margin: 10px 0;
    }
    h2 > span {
        border-bottom: 2px solid #0074bc;
    }
    #services > p {
        text-align: center;
        font-size: 25px;
        font-family: 'HelvetiThin';
        font-weight: 100;
        margin: 0 0 10px;
    }
    .span4 > p:hover {
        color: #0aa245;
    }
    .span4 {
        display: block;
        float: left;
        min-height: 30px;
        box-sizing: border-box;
        width: 32%;
        padding: 0 10px;
    }
    #services .row-fluid .span4 p {
        display: table;
        line-height: 24px;
        font-family: 'HelvetiThin';
        font-weight: 100;
        font-size: 16px;
        margin: 0 0 10px;
    }
    p[class="lin"] > * {
        display: table-cell;
        vertical-align: middle;
    }
    em {
        position: relative;
        width: 70px;
        height: 50px;
        background: center left no-repeat;
        background-size: 70%;
        font-style: italic;
    }
    .lin > a:hover {
        color: #0aa245;
    }
    .row-fluid {
        margin: 60px 0;
        width: 100%;
    }
    .row-fluid:before, .row-fluid:after {
        display: table;
        line-height: 0;
        content: "";
    }
    .row-fluid:after {
        clear: both;
    }

    #about {
        position: relative;
        text-align: center;
        padding: 50px 0 100px;
        background: no-repeat scroll center 0 / cover;
    }
    .about-main {
        position: relative;
        max-width: 1000px;
        margin: 0 auto;
    }
    .about-main > h2 {
        text-align: center;
        font-family: 'HelvetiThin';
        font-weight: 100;
        font-size: 42px;
        color: #fff;
        line-height: 60px;
        margin: 10px 0;
    }
    #about .row-fluid .span4 p {
        color: #fff;
        font-size: 18px;
        font-family: 'HelvetiThin';
        font-weight: 100;
        line-height: 25px;
        margin: 0 0 10px;
    }
    .image_expert {
        position: relative;
        border: 2px solid #fff;
        border-radius: 55px;
        display: inline-block;
        width: 90px;
        height: 90px;
        margin: 40px 0;
    }

    #stock {
        margin: 50px 0;
    }
    .stock > h2, .text > h2 {
        font-family: 'HelvetiThin';
        font-weight: 100;
        font-size: 42px;
        margin: 10px 0 10px;
        text-align: center;
        line-height: 40px;
        color: inherit;
        text-rendering: optimizelegibility;
    }
    .stock-main {
        position: relative;
        margin: 10px auto 80px auto;
        padding: 0;
        max-width: 1000px;
    }
    h1 {
        font-size: 38.5px;
        line-height: 40px;
        margin: 10px 0;
        font-family: inherit;
        font-weight: bold;
        color: inherit;
        text-rendering: optimizelegibility;
    }
    img[class="img"] {
        height: auto;
        max-width: 100%;
        vertical-align: middle;
        border: 0;
        width: 128px;
    }
    .text {
        text-align: center;
        display: block;
        float: left;
        min-height: 30px;
        box-sizing: border-box;
        margin-left: 0;
        width: 100%;
    }
    .text > p {
        font-size: 18px;
        font-family: 'HelvetiThin';
        font-weight: 100;
        margin: 0 0 10px;
    }

    #maps {
        text-align: center;
    }
    .maps > h2 {
        font-family: 'HelvetiThin';
        font-weight: 100;
        font-size: 42px;
        line-height: 40px;
        margin: 10px 0 40px 0;
        color: inherit;
        text-rendering: optimizelegibility;
    }
</style>