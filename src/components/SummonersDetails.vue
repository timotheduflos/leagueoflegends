<template>
    <div class="text-white">
        <div v-if="summonerFetch == false">
            <div class="text-center py-4 lg:px-4">
                <div class="p-2 bg-red-800 items-center text-indigo-100 leading-none lg:rounded-xl flex lg:inline-flex"
                    role="alert">
                    <span class="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3">Error</span>
                    <span class="font-semibold mr-2 text-left flex-auto">Please select a valid summoner name !</span>
                </div>
            </div>
        </div>
        <div v-else-if="fetch" class="container">
            <div class="presentation">
                <img :src="`https://ddragon.leagueoflegends.com/cdn/12.22.1/img/profileicon/${summonerName.profileIconId}.png`"
                    class="logo">
                <div class="">
                    <h1>{{ summonerName.name }}</h1>
                    <p>lvl {{ summonerName.summonerLevel }}</p>
                </div>
            </div>
            <div class="flex flex-col gap-y-4">
                <div class="game flex bg-gray-900" v-for="summonerGame, index in summonerGames" :key="index">
                    <div class="personnalScore">
                        <div class="flex">
                            <img :src="`https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${summonerHimself[index].championName}_0.jpg`"
                                class="championPick">
                                <div class="p-2 flex">
                                    <img :src="`https://ddragon.leagueoflegends.com/cdn/extras/summonerspells/${summonerHimself[index].summoner1Id}.png`">
                                </div>
                        </div>
                    </div>
                    <div class="teamFight grid grid-cols-3 gap-x-4">
                        <div class="flex flex-col">
                            <div v-for="player in summonerGame.info.participants">
                                <div v-if="player.teamId == 200">
                                    <div class="player pb-1 flex flex-auto items-center">
                                        <img :src="`https://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${player.championName}.png`"
                                            alt="">
                                        <h1 v-html="player.summonerName"></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col content-center">
                            <div v-for="abc in lane" class="pb-1 flex flex-auto self-center content-center">
                                <img :src="(`/assets/Lane/` + abc + `.svg`)" alt="" style="width: 20px;">
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <div v-for="player in summonerGame.info.participants">
                                <div v-if="player.teamId == 100">
                                    <div class="player pb-1 flex-auto flex items-center">
                                        <img :src="`https://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${player.championName}.png`"
                                            alt="">
                                        <h1 v-html="player.summonerName"></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'summonerName',
        'summonerFetch',
        'summonerGames',
        'lane',
        'summonerHimself',
        'fetch',
    ],

    methods: {
        test() {
            if (fetch) {
                console.log('WEEEESSHHHHHHh')
            }
        }
    },

    mounted() {
        this.test();
    },
}
</script>

<style scoped>
.container {
    min-width: 100%;
    padding-top: 2em;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.logo {
    width: 100px;
}

.presentation {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-self: center;
    justify-content: center;
    background: linear-gradient(to bottom, rgba(44, 44, 44, 1), rgba(26, 26, 26, 0));
    border-radius: 20px;
    width: max-content;
    align-items: center;
    padding-left: 5em;
    padding-right: 5em;
    padding-top: 1em;
    padding-bottom: 1em;
}

.presentation img {
    place-self: center;
    border-radius: 10px;

}

.presentation div {
    grid-column: span 2 / span 2;
    /* place-self: center; */
    text-align: center;
    padding-left: 2em;
}

.presentation div h1 {
    font-size: 40px;
    font-family: 'Kanit', sans-serif;
    color: rgb(255, 255, 255);
}

.presentation div p {
    font-size: 20px;
    font-family: 'Kanit', sans-serif;
    font-weight: 300;
}

.game {
    place-self: center;
    padding-top: 1em;
    width: 70%;
    /* max-width: 100%; */
    padding-left: 2em;
    padding-right: 2em;
}

.player img {
    width: 30px;
}

.player h1 {
    font-family: 'Kanit', sans-serif;
    padding-left: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%
}

.personnalScore {
    width: 70%;
}

.championPick {
    width: 10%;
    min-width: 50px;
    border-radius: 10px;
}


.teamFight {
    flex: 0 1 auto;
    width: 40%;
    max-width: 500px;
}
</style>