<template>
    <div class="menu">
        <div class="main">
            <ul>
                <li>
                    <router-link to="#main">
                        <img :src="imageLogo" alt="">
                    </router-link>
                </li>
                <li>
                    <p>
                        <em :style="{ backgroundImage: `url('${image}')` }"></em><a href="/site/app/therapy.html">Терапия</a>
                    </p>
                    <p>
                        <em :style="{ backgroundImage: `url('${image}')` }"></em><a href="/site/app/vaccination.html">Вакцинация</a>
                    </p>
                    <p>
                        <em :style="{ backgroundImage: `url('${image}')` }"></em><a href="/site/app/pediatrics.html">Педиатрия</a>
                    </p>
                    <p>
                        <em :style="{ backgroundImage: `url('${image}')` }"></em><a href="/site/app/gynecology.html">Гинекология</a>
                    </p>
                </li>
                <li>
                    <p>
                        <em :style="{ backgroundImage: `url('${image}')` }"></em><a href="/site/app/ultrasound.html">УЗИ</a>
                    </p>
                    <p>
                        <em :style="{ backgroundImage: `url('${image}')` }"></em><a href="/site/app/urology.html">Урология</a>
                    </p>
                    <p>
                        <em :style="{ backgroundImage: `url('${image}')` }"></em><a href="/site/app/ecg.html">ЭКГ,ЭЭГ</a>
                    </p>
                    <p>
                        <em :style="{ backgroundImage: `url('${image}')` }"></em><a href="/site/app/allergology.html">Аллергология/Иммунология</a>
                    </p>
                </li>
                <li>
                    <p>
                        <em :style="{ backgroundImage: `url('${image}')` }"></em><a href="/site/app/endocrinology.html">Эндокринология</a>
                    </p>
                </li>
                <li>
                    <p><b>Мы работаем</b></p>
                    <p>График работы</p>
                    <p>пн-пт с 7-30 до 19-00 </p>
                    <p>сб-вс с 8-00 до 17-00</p>
                </li>
                <li>
                    <p><b>Контакты</b></p>
                    <p>г. Подольск, ул. Свердлова, д. 21</p>
                    <p>
                        <b>Телефон:</b>
                        <span>+7 (496) 769-92-15</span>
                    </p>
                    <p>г. Подольск, ул. Ленинградская, д. 11 пом. 6</p>
                    <p>
                        <b>Телефон:</b> 
                        <span>+7 (496) 740-29-33</span>
                    </p>
                    <p>
                        <b>Email:</b> 
                        <span>info@cmdmedic.ru</span>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import VueRouter from 'vue-router'
    import Vue from 'vue'

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

    export default {
        name: "Menu",
        data () {
            return {
                imageLogo: "./site/app/img/logo2.png",
                image: "./site/app/img/services.jpg"
            }
        },
        router: router
    }
</script>

<style scoped>
    .menu {
        position: relative;
        margin: 20px 0 40px;
    }
    .main {
        position: relative;
        margin: 0 auto;
        max-width: 1240px;
    }
    ul {
        display: table;
        width: 94%;
        padding: 0;
        margin: 0 0 10px 25px;
    }
    li {
        display: table-cell;
        vertical-align: top;
        padding: 0 5px;
        line-height: 20px;
    }
    img {
        height: auto;
        max-width: 100%;
        vertical-align: middle;
        border: 0;
    }
    a {
        display: block;
        font-size: 17px;
        font-family: 'HelvetiThin';
        font-weight: 100;
        margin: 0px;
        line-height: 35px;
        color: #000;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
    p {
        font-size: 13px;
        font-family: 'HelvetiThin';
        font-weight: 100;
        color: #000;
        margin: 0;
        line-height: 35px;
        text-align: left;
    }
    p > * {
        display: table-cell;
        vertical-align: middle;
    }
    em {
        position: relative;
        width: 30px;
        height: 25px;
        background: center left no-repeat;
        background-size: 90%;
        font-style: italic;
    }
</style>