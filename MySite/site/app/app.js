import Vue from 'vue';
import Main from './components/Main.vue';

import About from "./components/About.vue";
import All from "./components/All.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Information from "./components/Information.vue";
import Maps from "./components/Maps.vue";
import Menu from "./components/Menu.vue";
import Popup from "./components/Popup.vue";
import Screen from "./components/Screen.vue";
import Services from "./components/Services.vue";
import Stock from "./components/Stock.vue";

Vue.component('About', About);
Vue.component('All', All);
Vue.component('Footer', Footer);
Vue.component('Header', Header);
Vue.component('Information', Information);
Vue.component('Maps', Maps);
Vue.component('Menu', Menu);
Vue.component('Popup', Popup);
Vue.component('Screen', Screen);
Vue.component('Services', Services);
Vue.component('Stock', Stock);

new Vue({
    render: (createEl) => createEl(Main),
}).$mount('#app');

