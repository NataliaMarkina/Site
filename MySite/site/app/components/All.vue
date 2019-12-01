<template>
    <div class="all">
        <div class="row-fluid">
            <div class="image">
                <img :src="image" alt="">
            </div>
            <div class="text">
                <p>Полный спектр исследований и анализов</p>
            </div>
            <div class="button-zaiavka">
                <a href="">Услуги</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "All",
        data () {
            return {
               image: "./site/app/img/all.png" 
            }
        }
    }
</script>

<style scoped>
    .all {
        position: relative;
        margin: 60px auto;
        max-width: 1000px;
    }
    .row-fluid {
        width: 100%;
        text-align: center;
    }
    .row-fluid:before, .row-fluid:after {
        display: table;
        line-height: 0;
        content: "";
    }
    .row-fluid:after {
        clear: both;
    }
    .image {
        margin-left: 0;
        width: 23.404255319148934%;
        display: block;
        float: left;
        min-height: 30px;
        box-sizing: border-box;
    }
    .text {
        width: 48.93617021276595%;
        display: block;
        float: left;
        min-height: 30px;
        margin-left: 2.127659574468085%;
        box-sizing: border-box;
    }
    p {
        margin: 20px 0;
        font-size: 25px;
        font-family: 'HelvetiThin';
        font-weight: 100;
    }
    .button-zaiavka {
        width: 23.404255319148934%;
        display: block;
        float: left;
        min-height: 30px;
        margin-left: 2.127659574468085%;
        box-sizing: border-box;
    }
    a {
        position: relative;
        top: 21px;
        padding: 10px 40px;
        margin-top: 10px;
        background: #1e8fc8;
        border: none;
        border-bottom: 2px solid #1378b7;
        box-shadow: 2px 2px 3px #ccc;
        margin-left: 5px;
        font-family: 'HelveticaNeueCyr-Roman';
        font-size: 16px;
        border-radius: 3px;
        color: white !Important;
        text-decoration: none !important;
    }
</style>