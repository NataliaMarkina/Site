<template>
    <div class="stock">
        <h2>Акции</h2>
        <div class="main">
            <div class="row-fluid">
                <div class="text">
                    <h1>
                        <img :src="image" alt="">
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
</template>

<script>
    export default {
        name: "Stock",
        data () {
            return {
                image: "./site/app/img/location5.png",
                col: "#ff0000"
            }
        }
    }
</script>

<style scoped>
    .stock {
        margin: 50px 0;
    }
    h2 {
        font-family: 'HelvetiThin';
        font-weight: 100;
        font-size: 42px;
        margin-bottom: 20px;
        text-align: center;
        line-height: 40px;
        color: inherit;
        text-rendering: optimizelegibility;
    }
    .main {
        position: relative;
        margin: 10px auto 80px auto;
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
    h1 {
        font-size: 38.5px;
        line-height: 40px;
        margin: 10px 0;
        font-family: inherit;
        font-weight: bold;
        color: inherit;
        text-rendering: optimizelegibility;
    }
    img {
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
    p {
        font-size: 18px;
        font-family: 'HelvetiThin';
        font-weight: 100;
        margin: 0 0 10px;
    }
</style>