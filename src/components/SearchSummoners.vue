<template>
    <div class="container text-white">
        <div class="content">
            <h1>Search Your Summoners ! </h1>
            <div class="flex">
                <input class="" v-model='summoner' type="text" placeholder="Pseudo of Summoner...">
                <button @click="summoners(summoner)">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    props:[
        'summoners'
    ],

    // methods: {
    //     async summoners() {

    //         let a = await fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+this.summoner+"?api_key=RGAPI-c7f0be36-29a0-4db4-8b93-2ccaac12a7b1")
    //         const firstStep = await a.json();
    //         this.summonerName = firstStep
    //         console.log(this.summonerName)

    //         let b = await fetch("https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/"+firstStep.puuid+"/ids?api_key=RGAPI-c7f0be36-29a0-4db4-8b93-2ccaac12a7b1")
    //         const secondStep = await b.json();
    //         console.log(secondStep)
    //     }
    // }
}
</script>

<style scoped>
.container {
    width: 100%;
    padding-top: 150px;
    display: flex;
    justify-content: center;
}

.content h1 {
    font-family: 'Crimson Pro', sans-serif;
    font-size: 40px;
}

.content input {
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    height: 40px;
    border-radius: 15px 0 0 15px;
    background-color: rgb(40, 40, 40);
    text-align: center;
    outline: none;
    width: 100%;

}

.content button {
    background-color: rgb(255, 255, 255);
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 0 15px 15px 0;
    color: black;
    transition: 0.5s;
}

.content button:hover {
    color: white;
    background-color: rgb(179, 19, 19);
    transition: 0.5s;
}
</style>