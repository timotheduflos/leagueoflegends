<script setup>
import Summoners from '../components/Summoners.vue'
</script>
<template>
    <div class="container w-full">
        <div>
            <Summoners />
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'result',
        ],

        methods: {
            test(){
                console.log('Hellooooooo')
            }
        },

        beforeMount(){
            this.test();
        }
    }
</script>

<style scoped>
.container{
        background: linear-gradient(to bottom, rgb(0, 0, 0), rgb(20, 20, 20));
        min-height: 100vh;
        max-height: 100%;
        min-width: 100vw;
    }
</style>