<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <button class="modal-default-button" @click="$emit('close')">
                            <p class="butText">X</p>
                        </button>
                        <br>
                        <p><b>ЗАЯВКА</b> НА КОНСУЛЬТАЦИЮ</p>
                    </div>

                    <div class="modal-body">
                        <input v-model="name" placeholder="Введите Ваше имя">
                        <br>
                        <input v-model="number" placeholder="Введите Ваш телефон">
                    </div>

                    <div class="modal-footer">
                        <button class="modal-set-button" @click="setData()">
                            Отправить заявку
                        </button>
                        <br>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import axios from 'axios'
    
    export default {
        name: "Popup",
        data () {
            return {
                name: null,
                number: null
            }
        },
        methods: {
            setData() {
                axios.post('post.php', {
                    'name': this.name,
                    'number': this.email
                }).then(response => {
                    console.log('success', response.data.message)
                }).catch(error => {
                    console.log(error.response)
                });
            }
        }
    }
</script>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 350px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #1378b7;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-default-button {
        float: right;
        cursor: pointer;
        top: 10px;
        right: 10px;
        width: 21px;
        height: 21px;
        background: transparent;
        outline: none;
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
    p {
        font-size: 24px;
        color: white;
        font-weight: 300;
        text-align: center;
        font-family: 'HelvetiThin';
        margin-top: 24px;
        margin-bottom: 68px;
    }
    input {
        width: 341px;
        border-radius: 2px;
        font-size: 18px;
        font-weight: 300;
        color: #5e5e5e;
        font-family: 'HelvetiThin';
        border: none;
        outline: 0;
        padding: 17px 0 17px 10px;
        margin-bottom: 26px;
    }
    .butText {
        font-weight: 900;
        color: black;
        font-size: 18px;
        margin-top: -3px;
        margin-left: -3px;
        text-align: center;
    }
    .modal-set-button {
        font-size: 24px;
        color: rgb(255, 255, 255);
        text-shadow: 0.5px 0.866px 1px rgba(0, 0, 0, 0.294);
        border: 0;
        height: 57px;
        width: 351px;
        outline: 0;
        box-shadow: 2px 3.464px 8px 0px rgba(0, 1, 1, 0.157), inset 0px -2px 0px 0px rgba(0, 1, 1, 0.02);
        border-radius: 3px;
        background-color: #0aa245;
    }
</style>