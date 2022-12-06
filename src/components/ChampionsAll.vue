<template>
    <div class="bg-black rounded-xl card" v-for="champion in champions" :key="champion.id">
        <div class="px-4 py-4">
            <h1 class="championName">{{ champion.name }}</h1>
            <img class="flex justify-center w-full pt-4"
                :src="`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`" :width="150" />
            <router-link :to="`/champion/${champion.id}`">
                <button class="buttonSee text-white w-full">See Champion</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'champions'
    ],

    mounted() {
        console.log(this.champions)
    },
}
</script>

<style scoped>
.card {
    text-align: center;
    transition: 0.2s ease-out;
}

.card:hover{
    color:#e31523;
    transition: 0.2s ease-out;
    transform: scale(1.05);
}

.card:hover > .buttonSee{
    background: #e31523;
    transition: 0.2s ease-out;
}

.championName {
    font-family: 'Crimson Pro', sans-serif;
}

.buttonSee {
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    background-color: #eeeeee;
    border-radius: 10px;
    transition: 0.3s;
    color: black;
}

.buttonSee:hover {
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    background-color: #e31523;
    border-radius: 10px;
    transition: 0.3s;
    color: white;
}
</style>