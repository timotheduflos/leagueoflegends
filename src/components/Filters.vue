<template>
    <div class="bg-gray-400/5 py-4 px-8 rounded-xl flex flex-col justify-center gap-5">
        <h1 class="titleFilter text-center">Filters</h1>
        <div class="w-1/4 flex self-center">
            <input type="text" class="inputFilter h-8 rounded-l-lg w-full focus:outline-none px-4 py-4"
                placeholder="Search..." v-model="term" @keypress.enter="search(term)">
            <button type="submit" class="inputSubmitFilter rounded-r-lg px-2" @click="search(term)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
        </div>
        <img src="../assets/GameMode/Vector.svg" width="600" class="self-center">
        <div class="w-full text-center flex justify-center text-sm gap-5">
            <button class="filterButton assassin" v-for="filter in filters" :key="filter"
                @click="filterChampion(filter)">{{ filter }}</button>
        </div>
    </div>
</template>

<script>
const filters =  ['Assassin', 'Fighter', 'Mage', 'Marksman', 'Support', 'Tank']

export default {
    props:[
        'filterChampion',
        'search',
        'resetFilter'
    ],

    data() {
        return {
            filters,
            term: '',
        }
    },
}
</script>

<style scoped>

.titleFilter {
    font-family: 'Crimson Pro', sans-serif;
    letter-spacing: 5px;
}

.filterButton {
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    transition: 0.5s;
}

.filterButton:hover {
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    color: #e31523;
    transition: 0.5s;
}

.inputFilter {
    font-family: 'Kanit', sans-serif;
    font-size: 16px;
    background: rgb(27, 27, 27);
    width: 20;
}

.inputSubmitFilter {
    background: rgb(27, 27, 27);
    transition: 0.5s;
}

.inputSubmitFilter:hover {
    background: #e31523;
    transition: 0.5s;
}

</style>