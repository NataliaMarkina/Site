<template>
    <div class="about" :style="{ backgroundImage: `url('${image}')` }">
        <div class="main">
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
</template>

<script>
    export default {
        name: "About",
        data() {
            return {
                image: "./site/app/img/bg_expert.jpg",
                image1: "./site/app/img/1.png",
                image2: "./site/app/img/2.png",
                image3: "./site/app/img/3.png",
                image4: "./site/app/img/4.png",
                image5: "./site/app/img/5.png",
                image6: "./site/app/img/6.png"
            }
        }
    }
</script>

<style scoped>    
    .about {
        position: relative;
        text-align: center;
        padding: 50px 0 100px;
        background: no-repeat scroll center 0 / cover;
    }
    .main {
        position: relative;
        max-width: 1000px;
        margin: 0 auto;
    }
    h2 {
        text-align: center;
        font-family: 'HelvetiThin';
        font-weight: 100;
        font-size: 42px;
        color: #fff;
        line-height: 60px;
    }
    .row-fluid {
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
    p {
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
    img {
        height: auto;
        max-width: 100%;
        vertical-align: middle;
        border: 0;
    }
    img:hover {
        color: #5e5e5e;
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