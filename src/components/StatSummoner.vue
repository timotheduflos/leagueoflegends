<template>
    <div class="container">
        <div class="content">
            <div>
                <Doughnut v-if='loaded' :data="chartData" />
                <h1>{{ Math.round(win * 100 / (win + loose)) }}%</h1>
            </div>
        </div>
        <!-- {{ summonerName.profileIconId }} -->
    </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS } from 'chart.js'

export default {
    name: 'App',
    components: {
        Doughnut
    },
    props: [
        'summonerName',
        'summonerGames',
        'summonerHimself'
    ],

    data: () => ({
        loaded: false,
        chartData: null
    }),

    methods: {
        async test() {
            var win = 0
            var loose = 0
            var result = 0
            for (let index = 0; index < this.summonerHimself.length; index++) {
                if (this.summonerHimself[index].gameEndedInEarlySurrender == false && this.summonerHimself[index].win == true) {
                    win += 1
                }
                else if (this.summonerHimself[index].gameEndedInEarlySurrender == false && this.summonerHimself[index].win == false) {
                    loose += 1
                }
            }
            result = Math.round(win * 100 / (win + loose))
            this.chartData = { result }
            this.loaded = true

        }
    },

    created() {
        this.test();
    }
}
</script>

<style scoped>
.container {
    width: 100%;
    /* background-color: red; */
    padding-bottom: 2em;
    display: flex;
    justify-content: center;
}

.content {
    place-self: center;
    padding-top: 1em;
    padding-bottom: 1em;
    width: 70%;
    background-color: blue;
    display: flex;
    justify-content: center;
}
</style>