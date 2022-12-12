<template>
    <div class="text-white skin">
        <swiper :modules="modules" :slides-per-view="1" :effect="'fade'" :space-between="50" :autoplay="{
            delay: 2500,
            disableOnInteraction: true,
        }" :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper"
            @slideChange="onSlideChange">
            <swiper-slide v-for="skin in resultSpecific.skins" class="slide">
                <div class="caroussel-container">
                    <img :src="`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${skin.num}.jpg`"
                        alt="" class="skinImage">
                    <h1 class="skinName" v-if="skin.name === 'default'">{{ id }}</h1>
                    <h1 class="skinName" v-else>{{ skin.name }}</h1>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation, Scrollbar, EffectFade, Autoplay, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },

    props: [
        'resultSpecific',
        // 'id'
    ],

    data() {
        return {
            id: '',
        }
    },

    methods: {
        test() {
            let id = this.$route.params.id
            this.id = id
            console.log(this.id)
        }
    },

    beforeMount() {
        this.test();
    },

    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Scrollbar, EffectFade, Autoplay, A11y],
        };
    },
}
</script>

<style scoped>
.skin {
    padding-bottom: 100px;
}

.skinImage {
    border-radius: 20px;
}

.skinName {
    padding-bottom: 1em;
    padding-top: 1em;
    display: absolute;
    margin-top: -4em;
    width: 100%;
    font-weight: 500;
    font-size: 30px;
    text-shadow: 0 0 0.05em black, 0 0 0.05em black, 0 0 0.05em black, 0 0 0.05em black, 0 0 0.05em black, 0 0 0.05em black, 0 0 0.05em black, 0 0 0.05em black, 0 0 0.05em black, 0 0 0.05em black, 0 0 0.05em black, 0 0 0.05em black ,0 0 0.05em black, 0 0 0.05em black, 0 0 0.05em black;
    /* -webkit-text-stroke: 1px rgb(0, 0, 0) ; */
}

.caroussel-background {
    background-size: cover;
    background-position: center;
}

.caroussel-container {
    position: relative;
}
</style>