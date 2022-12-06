<template>
    <div class="text-white px-32 py-4">
        <Filters :filters="filters" :filterChampion="filterChampion" :search="search" />
    </div>
    <div class="grid grid-cols-6 gap-4 px-32 text-white justify-items-center w-full">
        <ChampionsAll :champions="champions" />
    </div>
</template>

<script>
import ChampionsAll from './ChampionsAll.vue'
import Filters from './Filters.vue'

export default {
    name: 'App',
    components: {
        ChampionsAll,
        Filters,
    },

    data() {
        return {
            champions: [],
            result: []
        }
    },

    methods: {
        async listChampions() {
            let a = await fetch('https://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion.json')
            const b = await a.json();

            this.champions = b.data

            var result = []
            for (var i in b.data)
                result.push(b.data[i]);
            
            sessionStorage.setItem("champion", result)
        
            this.result = result
            console.log(this.result)

            this.champions = this.result

        },

        filterChampion(catName) {
            this.resetFilter();
            if (catName !== 'All') {
                for (let index = 0; index < this.champions.length; index++) {
                    this.champions = this.champions.filter((champion) => {
                        return champion.tags.includes(catName)
                    })
                }
            }
        },

        search(term) {
            this.resetFilter()
            for (let index = 0; index < this.champions.length; index++) {
                this.champions = this.champions.filter((champion) => {
                    return champion.id.toLowerCase().startsWith(term.toLowerCase())
                })
            }
        },

        resetFilter() {
            this.champions = this.result
        }
    },

    mounted() {
        this.listChampions();
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>