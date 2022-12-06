<template>
    <div v-for="spells, index in resultSpecific.spells" :key="index" class="flex">
        <div class="grid grid-cols-3 w-full place-items-center gap-4 py-8 rounded-xl px-4" :style="`background:${background[index]}`">
            <img :src='`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/spell/${spells.image.full}`' alt="">
            <h1 class="name">{{ spells.name }}</h1>
            <h1 class="key">{{letter[index]}}</h1>
            <div class="content col-span-3" v-html="spells.description">
                
            </div>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap'
export default {
    props: [
        'resultSpecific',
    ],

    data() {
        return {
            i: '',
            letter:[
                "Q", "W", "E", "R"
            ],
            background:[
                "",
                "#202020",
                "",
                "#202020"
            ]
        }
    },

    methods: {
        test() {
            console.log(this.letter)
        }
    },

    mounted() {
        this.test();
    },
}
</script>

<style scoped>

    .key{
        background-color: white;
        font-weight: 400;
        color: black;
        width: 40px;
        height: 40px;
        margin-top: 0;
        margin-left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
    }

    .name{
        font-weight: 500;
    }

</style>