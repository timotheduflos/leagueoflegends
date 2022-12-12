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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkC57ewgQi-TjIFQZLBneQrNUZ8LhvvGs",
  authDomain: "leagueoflegends-c2b5c.firebaseapp.com",
  projectId: "leagueoflegends-c2b5c",
  storageBucket: "leagueoflegends-c2b5c.appspot.com",
  messagingSenderId: "324247663709",
  appId: "1:324247663709:web:1870beb36e156a4b3909b4",
  measurementId: "G-CT3HLFPFXP"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('scroll-parallax', ScrollParallax);

app.mount("#app");
