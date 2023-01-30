<template>
    <div class="container">
        <div v-for="ranks in rank">
            <div v-if="ranks.queueType == 'RANKED_SOLO_5x5'" class="bg-black cellule">
                <div class="content">
                    <div class="rank bg-gradient-to-b from-gray-900 to-transparent rounded-xl p-2 text-center">
                        <h1 class="Title">Rank</h1>
                        <img class="rankImage" :src="`/assets/ranked-emblems/Emblem_${ranks.tier}.png`" alt="">
                        <h1>{{ ranks.tier }} {{ ranks.rank }}</h1>
                        <h1>{{ ranks.leaguePoints }} lp</h1>
                    </div>
                    <div class="donut-wrap bg-gradient-to-b from-gray-900 to-transparent rounded-xl p-2 px-4">
                        <h1 class="Title">Winrate</h1>
                        <div class="charts">
                            <canvas id="myChart"></canvas>
                        </div>
                        <h1>{{ chartData }}%</h1>
                        <h1>Hello</h1>
                    </div>
                </div>
            </div>
            <div v-else class="hidden">
            </div>
        </div>
        <!-- {{ summonerName.profileIconId }} -->
    </div>
</template>

<script>
import Chart from 'chart.js/auto';
// import { Chart as ChartJS } from 'chart.js'

export default {
    name: 'App',
    props: [
        'summonerName',
        'summonerGames',
        'summonerHimself',
        'rank'
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
            console.log(win)
            console.log(loose)
            result = Math.round(win * 100 / (win + loose))
            this.chartData = result
            this.loaded = true

        },

        chart() {
            const ctx = document.getElementById('myChart')
            const chart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Victory', 'Loose'],
                    datasets: [{
                        data: [(this.chartData), 100 - this.chartData],
                        backgroundColor: [
                            '#21C55D',
                            '#F04444'
                        ],
                        borderColor: [
                            'rgba(0, 0, 0, 0)'
                        ]
                    }],
                },
                options: {
                    plugins: {
                        legend: {
                            display: false
                        },
                        elements: {
                            center: {
                                text: "Hello"
                            }
                        },
                    },
                    // responsive: true,
                }
            });

            chart;
        }
    },

    created() {
        this.test();
    },

    mounted() {
        this.chart();
    },
}
</script>

<style scoped>
.container {
    display: flex;
    width: 100%;
    padding-bottom: 2em;
}

.cellule {
    display: flex;
    justify-content: center;
}

.content {
    place-self: center;
    padding-top: 1em;
    padding-bottom: 1em;
    width: 70%;
    /* background-color: ; */
    border-radius: 20px;
    display: flex;
    margin: 0;
    justify-content: center;
    gap: 50px;
}

.hidden {
    display: none
}

.donut-wrap {
    position: relative;
    /* max-width: 200px; */
    min-width: content;
}

.Title {
    width: 100%;
    text-align: center;
    font-weight: 600;
    text-transform: uppercase;
    /* letter-spacing: 0.2em; */
    font-family: Kanit;
    font-size: 2em;
}

.donut-wrap h1:nth-child(3) {
    position: absolute;
    top: 0;
    left: 0;
    color: #ffffff;
    font-size: 1.7em;
    font-weight: 500;
    font-family: 'Kanit', sans-serif;
    width: 100%;
    text-align: center;
    line-height: 13.5em;
}

.rankImage {
    width: 200px;
}

.rank h1:nth-child(3) {
    font-family: 'Kanit', sans-serif;
    font-weight: 500;
    font-size: 1.2em;
}

.rank h1:nth-child(4) {
    font-family: 'Kanit', sans-serif;
    font-weight: 400;
    font-size: 1em;
}

.charts {
    /* position: absolute; */
    margin-top: 2em;
    width: 200px;
    height: 200px;
}
</style>