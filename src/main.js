import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import AOS from 'aos';
import 'aos/dist/aos.css';

import "../public/assets/main.css";
import "../src/index.css"
import 'atropos/css'

import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('scroll-parallax', ScrollParallax);

app.mount("#app");
