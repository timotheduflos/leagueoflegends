<script setup>
import SummonersDetailsVue from './SummonersDetails.vue';
import SearchSummonersVue from './SearchSummoners.vue';
</script>

<template>
    <div class="container">
        <SearchSummonersVue :summoners="summoners" />
        <SummonersDetailsVue :summonerName="summonerName" :summonerFetch="summonerFetch" :summonerGames="summonerGames"
            :lane="lane" :summonerHimself="summonerHimself" :fetch="fetch" />
    </div>
</template>

<script>
export default {
    name: 'App',
    component: {
        SummonersDetailsVue,
        SearchSummonersVue,
    },

    data() {
        return {
            summoner: '',
            summonerName: [],
            summonerGames: [],
            lane: ['TOP', 'JUNGLE', 'MIDDLE', 'BOTTOM', 'UTILITY'],
            summonerHimself: [],
            summonerFetch: false,
            fetch: false,
        }
    },

    methods: {
        async summoners(summoner) {
            
            this.summonerName = []
            this.summonerGames = []
            this.summonerHimself = []
            this.fetch = false
            this.summonerFetch = false

            try {
                let a = await fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summoner + "?api_key=RGAPI-a8f7c00f-e2b9-4fdb-b857-5cd54e384bbf")
                const b = await a.json();
                this.summonerName = b
                this.summonerFetch = true
                console.log(b)

                let matchId = await fetch("https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/" + b.puuid + "/ids?api_key=RGAPI-a8f7c00f-e2b9-4fdb-b857-5cd54e384bbf")
                const secondStep = await matchId.json();
                console.log(secondStep)

                for (let index = 0; index < secondStep.length; index++) {
                    let gameDetails = await fetch('https://europe.api.riotgames.com/lol/match/v5/matches/' + secondStep[index] + "?api_key=RGAPI-a8f7c00f-e2b9-4fdb-b857-5cd54e384bbf")
                    const gameDetail = await gameDetails.json();
                    this.summonerGames.push(gameDetail)
                }

                for (let i = 0; i < this.summonerGames.length; i++) {
                    for (let index = 0; index < this.summonerGames[i].info.participants.length; index++) {
                        console.log('hello')
                        if (this.summonerGames[i].info.participants[index].summonerName.toLowerCase() === summoner.toLowerCase()) {
                            this.summonerHimself.push(this.summonerGames[i].info.participants[index])
                        }
                    }
                }
                this.fetch = true
                console.log(this.summonerGames)
                console.log(this.summonerHimself)
            } catch (error) {
                this.summonerFetch = false
            }
        }
    },
}
</script>

<style scoped>
.container {
    min-width: 100vw;
}
</style>