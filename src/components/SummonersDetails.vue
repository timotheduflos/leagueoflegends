<script setup>
import StatSummoner from './StatSummoner.vue';
</script>

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
                <img :src="`https://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${summonerName.profileIconId}.png`"
                    class="logo">
                <div class="">
                    <h1>{{ summonerName.name }}</h1>
                    <p>lvl {{ summonerName.summonerLevel }}</p>
                </div>
            </div>
            <div>
                <StatSummoner :summonerName="summonerName" :summonerGames="summonerGames"
                    :summonerHimself="summonerHimself" />
            </div>
            <div class="flex flex-col gap-y-4">
                <div class="game flex gap-x-8 bg-slate-900 rounded-lg" v-for="summonerGame, index in summonerGames"
                    :key="index">
                    <div class="personnalScore flex-col pb-1">
                        <div class="flex w-full flex-none pb-1">
                            <img :src="`https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${summonerHimself[index].championName}_0.jpg`"
                                class="championPick w-full">
                            <div class="px-2 w-full flex flex-col gap-y-2">
                                <div class="flex gap-x-2">
                                    <div>
                                        <!-- Summoner Spell 1 -->
                                        <div class="pb-2">
                                            <div class="min-w-max" v-if="summonerHimself[index].summoner1Id === 21">
                                                <img class='summonerSpell' src="/assets/summonerSpell/Barrier.webp">
                                            </div>
                                            <div class="min-w-max" v-if="summonerHimself[index].summoner1Id === 13">
                                                <img class='summonerSpell' src="/assets/summonerSpell/Clarity.webp">
                                            </div>
                                            <div class="min-w-max" v-if="summonerHimself[index].summoner1Id === 1">
                                                <img class='summonerSpell' src="/assets/summonerSpell/Cleanse.webp">
                                            </div>
                                            <div class="min-w-max" v-if="summonerHimself[index].summoner1Id === 3">
                                                <img class='summonerSpell' src="/assets/summonerSpell/Exhaust.webp">
                                            </div>
                                            <div class="min-w-max" v-if="summonerHimself[index].summoner1Id === 4">
                                                <img class='summonerSpell' src="/assets/summonerSpell/Flash.webp">
                                            </div>
                                            <div class="min-w-max" v-if="summonerHimself[index].summoner1Id === 6">
                                                <img class='summonerSpell' src="/assets/summonerSpell/Ghost.webp">
                                            </div>
                                            <div class="min-w-max" v-if="summonerHimself[index].summoner1Id === 7">
                                                <img class='summonerSpell' src="/assets/summonerSpell/Heal.webp">
                                            </div>
                                            <div class="min-w-max" v-if="summonerHimself[index].summoner1Id === 14">
                                                <img class='summonerSpell' src="/assets/summonerSpell/Ignite.webp">
                                            </div>
                                            <div class="min-w-max" v-if="summonerHimself[index].summoner1Id === 39">
                                                <img class='summonerSpell' src="/assets/summonerSpell/Mark.webp">
                                            </div>
                                            <div class="min-w-max" v-if="summonerHimself[index].summoner1Id === 11">
                                                <img class='summonerSpell' src="/assets/summonerSpell/Smite.webp">
                                            </div>
                                            <div class="min-w-max" v-if="summonerHimself[index].summoner1Id === 12">
                                                <img class='summonerSpell' src="/assets/summonerSpell/Teleport.webp">
                                            </div>
                                        </div>
                                        <!-- Summoner Spell 2 -->
                                        <div class="flex">
                                            <div class="min-w-max" v-if="summonerHimself[index].summoner2Id === 21">
                                                <img class='summonerSpell' src="/assets/summonerSpell/Barrier.webp">
                                            </div>
                                            <div class="min-w-max" v-if="summonerHimself[index].summoner2Id === 13">
                                                <img class='summonerSpell' src="/assets/summonerSpell/Clarity.webp">
                                            </div>
                                            <div class="min-w-max" v-if="summonerHimself[index].summoner2Id === 1">
                                                <img class='summonerSpell' src="/assets/summonerSpell/Cleanse.webp">
                                            </div>
                                            <div class="min-w-max" v-if="summonerHimself[index].summoner2Id === 3">
                                                <img class='summonerSpell' src="/assets/summonerSpell/Exhaust.webp">
                                            </div>
                                            <div class="min-w-max" v-if="summonerHimself[index].summoner2Id === 4">
                                                <img class='summonerSpell' src="/assets/summonerSpell/Flash.webp">
                                            </div>
                                            <div class="min-w-max" v-if="summonerHimself[index].summoner2Id === 6">
                                                <img class='summonerSpell' src="/assets/summonerSpell/Ghost.webp">
                                            </div>
                                            <div class="min-w-max" v-if="summonerHimself[index].summoner2Id === 7">
                                                <img class='summonerSpell' src="/assets/summonerSpell/Heal.webp">
                                            </div>
                                            <div class="min-w-max" v-if="summonerHimself[index].summoner2Id === 14">
                                                <img class='summonerSpell' src="/assets/summonerSpell/Ignite.webp">
                                            </div>
                                            <div class="min-w-max" v-if="summonerHimself[index].summoner2Id === 39">
                                                <img class='summonerSpell' src="/assets/summonerSpell/Mark.webp">
                                            </div>
                                            <div class="min-w-max" v-if="summonerHimself[index].summoner2Id === 11">
                                                <img class='summonerSpell' src="/assets/summonerSpell/Smite.webp">
                                            </div>
                                            <div class="min-w-max" v-if="summonerHimself[index].summoner2Id === 12">
                                                <img class='summonerSpell' src="/assets/summonerSpell/Teleport.webp">
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div v-for="runes in rune" class="min-w-max">
                                            <div v-for="runesSpec in runes.slots[0].runes">
                                                <div v-if="runesSpec.id == summonerHimself[index].perks.styles[0].selections[0].perk"
                                                    class="pb-2">
                                                    <img class="runeSpell"
                                                        :src="`http://ddragon.canisback.com/img/${runesSpec.icon}`"
                                                        alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div v-for="runes in rune" class="">
                                            <div v-if="runes.id == summonerHimself[index].perks.styles[1].style">
                                                <img class="runeSpell"
                                                    :src="`http://ddragon.canisback.com/img/${runes.icon}`" alt="">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-1/3 min-w-fit flex justify-center items-center">
                                        <div class="text-center">
                                            <h1 class="score">{{ summonerHimself[index].kills }} / {{
                                                summonerHimself[index].deaths
                                            }}
                                                / {{ summonerHimself[index].assists }}</h1>
                                            <div
                                                v-if="(summonerHimself[index].kills + summonerHimself[index].assists) / summonerHimself[index].deaths == Infinity">
                                                <h1 class="kda">Perfect KDA</h1>
                                            </div>
                                            <div
                                                v-else-if="Number.isNaN((summonerHimself[index].kills + summonerHimself[index].assists) / summonerHimself[index].deaths) || (summonerHimself[index].kills + summonerHimself[index].assists) / summonerHimself[index].deaths == 0">
                                                <h1 class="kda">0.00 :1 KDA</h1>
                                            </div>
                                            <div v-else>
                                                <h1 class="kda">{{ ((summonerHimself[index].kills +
                                                    summonerHimself[index].assists) /
                                                    summonerHimself[index].deaths).toFixed(2)
                                                }} :1 KDA</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="w-full justify-end flex pl-4 items-center border-l-2 text-end">
                                        <div>
                                            <h1 class="gameMode" v-if="summonerGame.info.queueId == 400">Normal</h1>
                                            <h1 class="gameMode" v-if="summonerGame.info.queueId == 420">Ranked Solo
                                            </h1>
                                            <h1 class="gameMode" v-if="summonerGame.info.queueId == 440">Ranked Flex
                                            </h1>
                                            <h1 class="time">{{ Math.floor(summonerGame.info.gameDuration / 60) }}m :
                                                {{ summonerGame.info.gameDuration % 60 }}s</h1>
                                            <h1 class="date"
                                                v-if="Math.ceil(Math.abs((new Date(summonerGame.info.gameStartTimestamp)) - (new Date())) / (1000 * 60 * 60 * 24)) === 0">
                                                Today</h1>
                                            <h1 class="date"
                                                v-if="Math.ceil(Math.abs((new Date(summonerGame.info.gameStartTimestamp)) - (new Date())) / (1000 * 60 * 60 * 24)) === 1">
                                                {{
                                                    Math.ceil(Math.abs((new Date(summonerGame.info.gameStartTimestamp)) -
                                                        (new Date())) / (1000 * 60 * 60 * 24))
                                                }} day ago</h1>
                                            <h1 class="date"
                                                v-if="Math.ceil(Math.abs((new Date(summonerGame.info.gameStartTimestamp)) - (new Date())) / (1000 * 60 * 60 * 24)) > 1">
                                                {{
                                                    Math.ceil(Math.abs((new Date(summonerGame.info.gameStartTimestamp)) -
                                                        (new Date())) / (1000 * 60 * 60 * 24))
                                                }} days ago</h1>
                                        </div>
                                    </div>
                                </div>
                                <!-- championObject -->
                                <div class="flex gap-x-2 flex-1 items-center">
                                    <img :src="`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/${summonerHimself[index].item0}.png`"
                                        alt="" class="championObject">
                                    <img :src="`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/${summonerHimself[index].item1}.png`"
                                        alt="" class="championObject">
                                    <img :src="`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/${summonerHimself[index].item2}.png`"
                                        alt="" class="championObject">
                                    <img :src="`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/${summonerHimself[index].item3}.png`"
                                        alt="" class="championObject">
                                    <img :src="`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/${summonerHimself[index].item4}.png`"
                                        alt="" class="championObject">
                                    <img :src="`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/${summonerHimself[index].item5}.png`"
                                        alt="" class="championObject">
                                    <img :src="`http://ddragon.leagueoflegends.com/cdn/12.22.1/img/item/${summonerHimself[index].item6}.png`"
                                        alt="" class="championObject">
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 h-10 flex w-full">
                            <div v-if="summonerHimself[index].win"
                                class="place-self-center text-center w-full bg-green-500 rounded-lg">
                                <h1>Victory !</h1>
                            </div>
                            <div v-else class="place-self-center text-center w-full bg-red-500 rounded-lg">
                                <h1 class="">Defeat !</h1>
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
</template >

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

    data() {
        return {
            rune: [],
            // summonerName: [],
            // summonerGames: [],
            // summonerHimself: [],
        }
    },

    methods: {
        async test() {
            if (fetch) {
                let runes = await fetch('http://ddragon.leagueoflegends.com/cdn/10.22.1/data/en_US/runesReforged.json')
                const rune = await runes.json()
                console.log(rune)
                this.rune = rune
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
    flex: 0 1 auto;
    width: 150px;
    height: 100%;
    min-height: 50px;
    min-width: 50px;
    border-radius: 10px;
}


.teamFight {
    flex: 0 1 auto;
    width: 40%;
    max-width: 500px;
}

.summonerSpell {
    width: 30px;
    height: 30px;
    width: min-content;
}

.championObject {
    width: 30px;
    height: 30px;
}

.runeSpell {
    width: 30px;
    height: 30px;
}

.score {
    font-family: 'Kanit', sans-serif;
    font-weight: 500;
    font-size: 25px;
}

.kda {
    font-family: 'Kanit', sans-serif;
    font-weight: 300;
    font-size: 15px;
}

.gameMode {
    font-family: 'Kanit', sans-serif;
    font-weight: 500;
    font-size: 20px;
}

.time {
    font-family: 'Kanit', sans-serif;
    font-weight: 300;
    font-size: 15px;
}

.date {
    font-family: 'Kanit', sans-serif;
    font-weight: 500;
    font-size: 15px;
}
</style>