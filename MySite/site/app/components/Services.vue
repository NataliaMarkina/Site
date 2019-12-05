<template>
    <div id="services" class="services">
        <h2>
            <span>Услуги</span>
        </h2>
        <p>Оказываем услуги для вашего здоровья</p>
        <div class="row-fluid">
            <div class="span4">
                <p>
                    <em :style="{ backgroundImage: `url('${image}')` }"></em>
                    <a href="/site/app/therapy.html">Терапия</a>    
                </p>
                <p>Диагностика, лечение и профилактика общих заболеваний .</p>
            </div>
            <div class="span4">
                <p>
                    <em :style="{ backgroundImage: `url('${image}')` }"></em>
                    <a href="/site/app/vaccination.html">Вакцинация</a>
                </p>
                <p>Введение в организм человека антигенного вещества, способного вызвать иммунитет к определенной болезни</p>
            </div>
            <div class="span4">
                <p>
                    <em :style="{ backgroundImage: `url('${image}')` }"></em>
                    <a href="/site/app/pediatrics.html">Педиатрия</a>
                </p>
                <p>Диагностика, лечение и профилактика заболеваний детей от рождения до 18 лет</p>
            </div>
            <router-view class="view"></router-view>
        </div>
        <div class="row-fluid">
            <div class="span4">
                <p>
                    <em :style="{ backgroundImage: `url('${image}')` }"></em>
                    <a href="/site/app/gynecology.html">Гинекология</a>
                </p>
                <p>Диагностика и лечение заболеваний женской репродуктивной системы</p>
            </div>
            <div class="span4">
                <p>
                    <em :style="{ backgroundImage: `url('${image}')` }"></em>
                    <a href="/site/app/ultrasound.html">УЗИ</a>
                </p>
                <p>Ультразвуковая диагностика заболеваний</p>
            </div>
            <div class="span4">
                <p>
                    <em :style="{ backgroundImage: `url('${image}')` }"></em>
                    <a href="/site/app/urology.html">Урология</a>
                </p>
                <p>Диагностика и лечение заболеваний мочевой системы</p>
            </div>
        </div>
        <div class="row-fluid">
            <div class="span4">
                <p>
                    <em :style="{ backgroundImage: `url('${image}')` }"></em>
                    <a href="/site/app/ecg.html">ЭКГ, ЭЭГ</a>
                </p>
                <p>Функциональная диагностика заболеваний</p>
            </div>
            <div class="span4">
                <p>
                    <em :style="{ backgroundImage: `url('${image}')` }"></em>
                    <a href="/site/app/allergology.html">Аллергология/Иммунология</a>
                </p>
                <p>Диагностика, лечение и профилактика аллергических реакций и заболеваний</p>
            </div>
            <div class="span4">
                <p>
                    <em :style="{ backgroundImage: `url('${image}')` }"></em>
                    <a href="/site/app/endocrinology.html">Эндокринология</a>
                </p>
                <p>Диагностика заболеваний желез внутренней секреции (эндокринных желез).</p>
            </div>
        </div>
        <div class="row-fluid">
            <div class="span4">
                <p></p>
                <p></p>
            </div>
            <div class="span4">
                <p></p>
                <p></p>
            </div>
            <div class="span4">
                <p></p>
                <p></p>
            </div>
        </div>
    </div>
</template>

<script>
    import VueRouter from 'vue-router'
    import Vue from 'vue'

    Vue.use(VueRouter);

    const router = new VueRouter({
        mode: 'history',
        routes: []
    });


    export default {
        name: "Services",
        data() {
            return {
                image: "./site/app/img/services.jpg"
            }
        },
        router: router
    }
</script>

<style scoped>
    .services {
        position: relative;
        padding: 50px 0 50px;
        max-width: 1000px;
        margin: 0 auto;
    }
    h2 {
        text-align: center;
        font-family: 'HelvetiThin';
        font-weight: 100;
        font-size: 50px;
        line-height: 60px;
        margin: 10px 0;
    }
    span {
        border-bottom: 2px solid #0074bc;
    }
    .services > p {
        text-align: center;
        font-size: 25px;
        font-family: 'HelvetiThin';
        font-weight: 100;
        line-height: 35px;
        margin: 0 0 10px;
    }
    p:hover {
        color: #0aa245;
    }
    .row-fluid {
        margin: 60px 0;
        width: 100%;
    }
    .span4 {
        display: block;
        float: left;
        min-height: 30px;
        box-sizing: border-box;
        width: 31.914893617021278%;
        padding: 0 10px;
    }
    .row-fluid [class*="span"]:first-child {
        margin-left: 0;
    }
    .services .row-fluid .span4 p {
        display: table;
        line-height: 24px;
        font-family: 'HelvetiThin';
        font-weight: 100;
        font-size: 16px;
        margin: 0 0 10px;
    }
    p > * {
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
    a {
        color: #000;
        text-decoration: none;
    }
    a:hover {
        color: #0aa245;
    }
    .row-fluid:before, .row-fluid:after {
        display: table;
        line-height: 0;
        content: "";
    }
    .row-fluid:after {
        clear: both;
    }
</style>