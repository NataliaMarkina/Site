<template>
    <div class="screen" :style="{ backgroundImage: `url('${imageBg}')` }">
        <div class="main">
            <h3>
                <img :src="image" alt="">
                г. Подольск
            </h3>
            <div class="main-block">
                <h2>Медицинские центры</h2>
                <h2> в  Подольске</h2>
                <hr>
                <h3>Анализы экспертного уровня</h3>
                <p class="zaiavka">
                    <button class="button-zaiavka" id="show-modal" @click="showModal = true">Заявка на консультацию</button>
                    <Popup v-if="showModal" @close="showModal = false">
                    </Popup>
                </p>
            </div>
            <h3>
                Своевременная диагностика спасает жизнь
            </h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Screen",
        data() {
            return {
                imageBg: "./site/app/img/screen_bg.jpg",
                image: "./site/app/img/point.png",
                showModal: false
            }
        }
    }
</script>

<style scoped>
    div {
        display: block;
    }
    .screen {
        position: relative;
        padding: 50px 0;
        text-align: center;
        background: no-repeat scroll center 0px / cover;
    }
    .main {
        position: relative;
        max-width: 1000px;
        margin: 0 auto;
    }
    h3 {
        font-size: 30px;
        line-height: 40px;
        font-family: 'HelvetiThin';
        font-weight: 100;
        text-shadow: 1px 1px 1px #000;
        color: #fff;
    }
    img {
        height: auto;
        max-width: 100%;
        vertical-align: middle;
        border: 0;
    }
    h2 {
        font-size: 48px;
        font-family: 'HelvetiThin';
        line-height: 70px;
        font-weight: 100;
        text-shadow: 1px 1px 1px #000;
        color: #fff;
        margin: 10px 0;
    }
    .main-block {
        position: relative;
        margin: 115px 0 100px;
    }
    .main-block h3 {
        font-weight: bold;
    }
    .zaiavka {
        position: relative;
        padding: 10px 0;
        margin: 0 0 10px;
    }
    .button-zaiavka {
        background: #1e8fc8;
        border: none;
        border-bottom: 2px solid #1378b7;
        box-shadow: 2px 2px 3px #ccc;
        margin-left: 5px;
        font-family: 'HelveticaNeueCyr-Roman';
        font-size: 16px;
        border-radius: 3px;
        padding: 10px;
        color: white !Important;
        text-decoration: none !important;
    }
    hr {
        margin: 20px auto !important;
        width: 30% !important;
        border-color: #0ba245 !important;
        border: 0;
        border-top: 1px solid #eeeeee;
        border-bottom: 1px solid #ffffff;
    }
</style>