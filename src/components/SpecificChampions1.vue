<template>
    <div class="container">
        <div class="subContainer">
            <div class="Main">
                <div class="subMain">
                    <h1 class="nameChampion">{{ resultSpecific.name }}</h1>
                    <h1 class="titleChampion">" {{ resultSpecific.title }} "</h1>
                </div>
            </div>
            <div class="Main2">
                <div class="description">
                    <div class="containerDescription">
                        <div class="blurb">
                            <h1 class="role">Role</h1>
                            <div class="grid grid-cols-5 gap-5 place-content-center">
                                <div class="rolePart flex justify-center gap-10 col-span-2">
                                    <div v-for="tags in resultSpecific.tags" class="flex flex-col justify-center">
                                        <img :src="(`../src/assets/Role/` + tags + `.svg`)"
                                            class="roleSvg place-self-center">
                                        <h1 class="tagsName">{{ tags }}</h1>
                                    </div>
                                </div>
                                <div class="place-self-center">
                                    <div class="border"></div>
                                </div>
                                <div class="h-full place-self-center col-span-2">
                                    <div class="difficultyPart flex flex-col">
                                        <div class="stroke"
                                            v-if="(loaded === true && resultSpecific.info.difficulty >= 0 && resultSpecific.info.difficulty <= 3)">
                                            <div class="flex h-full gap-2 items-center">
                                                <svg width="50" height="10" class="place-self-center">
                                                    <rect width="50" height="10" style="fill:#e31523" />
                                                </svg>
                                                <svg width="50" height="10" class="place-self-center">
                                                    <rect width="50" height="10" style="fill:rgb(34, 34, 34)" />
                                                </svg>
                                                <svg width="50" height="10" class="place-self-center">
                                                    <rect width="50" height="10" style="fill:rgb(34, 34, 34)" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="stroke"
                                            v-if="(loaded === true && resultSpecific.info.difficulty > 3 && resultSpecific.info.difficulty <= 7)">
                                            <div class="flex h-full gap-2 items-center">
                                                <svg width="50" height="10" class="place-self-center">
                                                    <rect width="50" height="10" style="fill:#e31523" />
                                                </svg>
                                                <svg width="50" height="10" class="place-self-center">
                                                    <rect width="50" height="10" style="fill:#e31523" />
                                                </svg>
                                                <svg width="50" height="10" class="place-self-center">
                                                    <rect width="50" height="10" style="fill:rgb(34, 34, 34)" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="stroke"
                                            v-if="(loaded === true && resultSpecific.info.difficulty > 7)">
                                            <div class="flex h-full gap-2 items-center">
                                                <svg width="50" height="10" class="place-self-center">
                                                    <rect width="50" height="10" style="fill:#e31523" />
                                                </svg>
                                                <svg width="50" height="10" class="place-self-center">
                                                    <rect width="50" height="10" style="fill:#e31523" />
                                                </svg>
                                                <svg width="50" height="10" class="place-self-center">
                                                    <rect width="50" height="10" style="fill:#e31523" />
                                                </svg>
                                            </div>
                                        </div>
                                        <h1 class="tagsName">Difficulty</h1>
                                        <!-- <div v-if="(result.info.difficulty == 0)">Hello</div> -->
                                    </div>
                                </div>
                            </div>
                            <div class="history">
                                <h1>Resume</h1>
                                <p>{{ resultSpecific.lore }}</p>
                            </div>
                            <div class="spell">
                                <div class="w-full flex justify-center">
                                    <button class="flex gap-4 justify-center items-center" id="buttonSpell">
                                        <h1 class="nameSpell">Spells</h1>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="svgButton w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="listSpell w-full">
                                    <SpellChampion :resultSpecific="resultSpecific" :id="id" />
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
import SpellChampion from './SpellChampion.vue'
import gsap from 'gsap'

export default {
    name: 'Appp',
    components: {
        SpellChampion,
    },

    data() {
        return {
            loaded: false,
            resultSpecific: [],
            id: '',
            backgroundImage: ''
        }
    },

    methods: {
        async initialize() {

            let id = this.$route.params.id

            var a = await fetch('http://ddragon.leagueoflegends.com/cdn/12.22.1/data/en_US/champion/' + id + '.json')
            var b = await a.json()

            var result = []
            for (var i in b.data)
                result.push(b.data[i]);

            for (let index = 0; index < result.length; index++) {
                if (result[index].id === id) {
                    this.resultSpecific = result[index];
                }
            }

            console.log(this.resultSpecific)

            this.backgroundImage = "url(../src/assets/img/champion/centered/" + id + "_0.jpg)"
            this.loaded = true;
        },

        showSpell() {
            var button = document.querySelector('#buttonSpell')
            var svg = document.querySelector('.svgButton')
            console.log(svg)
            var spell = document.querySelector('.listSpell')

            spell.style.display = 'none'
            // console.log(a)
            button.addEventListener('click', () => {
                if (spell.style.display === 'block') {
                    gsap.timeline()
                        .add('go')
                        .fromTo(spell, {
                            display: 'block',
                            y:0,
                            opaciy: 1
                        },{
                            y:100,
                            opacity: 0,
                            duration: 1,
                            display: 'none',
                        }, 'go')
                        
                        .fromTo(svg, {
                            rotation: 180
                        },{
                            rotation: 0,
                            duration: 0.5,
                        }, 'go');
                } else {
                    gsap.timeline()
                        .add('go')
                        .fromTo(spell, {
                            display: 'none',
                            y:100,
                            opaciy: 0
                        },{
                            display: 'block',
                            y:0,
                            opacity: 1,
                            duration: 1,
                        }, 'go')
                        
                        .fromTo(svg, {
                            rotation:0
                        },{
                            rotation: 180,
                            duration: 0.5,
                        }, 'go');;
                }
            })
        }
    },

    beforeMount() {
        this.initialize()
    },

    mounted() {
        this.showSpell();
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.container {
    display: flex;
    background: red;
    color: white;
    /* padding-top: 100px; */
    justify-content: center;
}

.subContainer {
    background: rgb(11, 11, 11);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

}

.nameChampion {
    font-family: 'Crimson Pro', sans-serif;
    font-weight: 500;
    font-size: 50px;
    text-transform: uppercase;
}

.titleChampion {
    font-family: 'Crimson Pro', sans-serif;
    font-size: 25px;
    font-weight: 300;
    text-transform: uppercase;
}

.Main {
    background-image: v-bind(backgroundImage);
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    width: 100%;
    height: max-content;
}

.Main2 {
    width: 100%;
    display: flex;
    justify-content: center;
}

.subMain {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0%), rgb(11, 11, 11));
    width: 100%;
    height: 100%;
    padding-top: 30%;
    text-align: center;
}

.description {
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.containerDescription {
    font-family: 'Crimson Pro', sans-serif;
    width: 70%;
    text-align: center;
    padding-top: 4em;
}

.blurb {
    font-family: 'Kanit', sans-serif;
    text-align: center;
    font-size: 20px;
    border: 2px solid;
    border-radius: 10px;
    border-color: rgba(255, 255, 255, 0%);
    padding: 1em 3em;
    font-weight: 200;
    transition: 1s;
}

.blurb:hover {
    border-color: #e3152381;
}

.role {
    font-family: 'Kanit', sans-serif;
    font-weight: 400;
    font-size: 25px;
}

.roleSvg {
    width: 50px
}

.rolePart {
    padding-top: 1em;
    padding-bottom: 1em;
}

.difficultyPart {
    /* padding-top: 1em;
    padding-bottom: 1em; */
    height: 100%;
    flex: auto;
    padding-top: 1em;
    padding-bottom: 1em;
}

.tagsName {
    font-weight: 400;
}

.stroke {
    height: 50px;
}

.border {
    width: 1px;
    height: 90px;
    border: 0.5px solid;
    border-color: white;
}

.history {
    padding-top: 50px;
}

.history h1 {
    font-family: 'Kanit', sans-serif;
    font-weight: 500;
    font-size: 25px;
}

.spell {
    padding-top: 50px;
}

.spell h1 {
    font-family: 'Kanit', sans-serif;
    font-weight: 500;
    font-size: 25px;
}
</style>