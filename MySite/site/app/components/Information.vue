<template>
    <div class="information">
        <div class="row-fluid">
            <div class="image-admin">
                    <img :src="image" alt="">
            </div>
            <div class="inf">
                <p><b>Наталья Агафонова</b>, администратор CMD-Подольск</p>
                <h4>На все Ваши вопросы мы также готовы ответить <b>по телефону:</b></h4>
                <p>Либо оставьте заявку и мы свяжемся с вами в ближайшее время</p>
            </div>
            <div class="numbers">
                <img :src="imageMob" alt="">
                <h3>
                    <span class="telephone">+7 (496) 740-29-33</span>
                    <br>
                    <span class="telephone">+7 (496) 769-92-15</span>
                </h3>
                <button class="button-zaiavka" id="show-modal" @click="showModal = true">Отправить заявку</button>
                <Popup v-if="showModal" @close="showModal = false">
                </Popup>
            </div>
        </div>
    </div>
</template>

<script>
    import Popup from "./Popup.vue";
    
    export default {
        name: "Information",
        data () {
            return {
                image: "./site/app/img/img_op.png",
                imageMob: "./site/app/img/mob_image.png",
                showModal: false
            }
        },
        components: {
            Popup
        }
    }
</script>

<style scoped>
    .information {
        position: relative;
        border: 2px solid #0aa245;
        margin: 80px auto;
        padding: 30px 0;
        max-width: 1000px;
    }
    .row-fluid {
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
    .image-admin {
        margin-left: 0;
        width: 23.404255319148934%;
        display: block;
        float: left;
        min-height: 30px;
        box-sizing: border-box;
        text-align: center;
    }
    .inf {
        width: 40.42553191489362%;
        display: block;
        float: left;
        min-height: 30px;
        margin-left: 2.127659574468085%;
        box-sizing: border-box;
    }
    p {
        font-size: 18px;
        font-family: 'HelvetiThin';
        font-weight: 100;
        margin: 0 0 10px;
    }
    h4 {
        font-family: 'HelvetiThin';
        font-weight: 100;
        line-height: 30px;
        font-size: 26px;
        margin-top: 50px;
    }
    .numbers {
        width: 31.914893617021278%;
        display: block;
        float: left;
        min-height: 30px;
        margin-left: 2.127659574468085%;
        box-sizing: border-box;
        padding: 0 10px;
        text-align: center;
    }
    img {
        height: auto;
        max-width: 100%;
        vertical-align: middle;
        border: 0;
    }
    h3 {
        font-size: 30px;
        line-height: 40px;
        margin: 10px 0;
        font-family: inherit;
        font-weight: bold;
        color: inherit;
        text-rendering: optimizelegibility;
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
</style>