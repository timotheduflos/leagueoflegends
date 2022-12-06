<template>
    <div class="main">
        <div class="submain">
            <div class="content text-center">
                <h1 class="firstTitle text-4xl text-white uppercase">Choose your style</h1>
                <h1 class="secondTitle">I - Class</h1>
                <div class="flex justify-center pt-2">
                    <div class="grid grid-cols-6 gap-12 w-1/3">
                        <div>
                            <button class="assassin text-white w-5/6"><svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 100 100" id="assassinFill">
                                    <path
                                        d="M56.59 73.71l1.67-2.88c5.75-9.34 5.51-16 3.83-20.59a39.78 39.78 0 01-9.1 16 2 2 0 01-1.43.48H48.2a2.17 2.17 0 01-1.67-.72 39.78 39.78 0 01-9.1-16c-1.68 4.55-1.68 11.26 3.83 20.59l1.68 2.88-3.36 5.75 10.06 17.72L59.7 79.22z">
                                    </path>
                                    <path
                                        d="M73.11 38.74c-3.35-4.31-6-10-6-18.91 0-4.07-3.59-8.15-7.66-12-4.79-4.31-5.75-5.74-9.58-5.74s-4.79 1.43-9.34 5.74c-4.07 3.83-7.66 7.91-7.66 12 0 8.86-2.88 14.6-6 18.68L12.76 52.87 2.23 45.69v12.93S2.47 84 39.58 97.89c0 0-14.13-7.18-16.28-31.13-.24-1.67-.24-9.1-.24-10.29A119.77 119.77 0 0036.71 74c-.72-1.2-1.44-2.64-2.16-3.83-5-10.54-4.07-18.2-1.67-23.47a22.77 22.77 0 017.42-8.86l9.58 9.58 9.58-9.58a22.77 22.77 0 017.42 8.86c2.4 5.27 3.59 12.93-1.43 23.23-.72 1.38-1.45 2.58-2.16 4.07a119.77 119.77 0 0013.65-17.53c0 1.19 0 8.62-.24 10.29-2.39 23.95-16.28 31.13-16.28 31.13C97.53 84 97.77 58.62 97.77 58.62V45.69l-10.53 7.18z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <button class="fighters text-white w-5/6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="fightersFill">
                                    <path
                                        d="M67.84 56.35v5.5c8.62-8.62 14.37 0 14.37 0C112.14 40.78 90.35 2 90.35 2s-.72 17.24-15.08 27.77v16.52c-.24 4.79-3.84 7.9-7.43 10.06M17.79 62.09s4.07-6.46 10.78-2.63L20.91 48.2l6.7-16c-17.24-10.54-18-29.93-18-29.93S-12.14 41 17.79 62.09M26.89 83.89l5.51-18.68-.24-.48L19.23 77.9A17.78 17.78 0 017.5 83.17H3l-1 2.39 12 11.5zM92.27 83.89a16.24 16.24 0 01-11.74-5.27L68.8 66.88l3.83 17.72L85.8 98l12-11.49-1-2.4zM55.87 42.7c0 .24-.24.48-.24.71h.72c5.75.48 7.66 2.64 9.1 7.67a9.35 9.35 0 002.39-1.92c1-1 1.68-1.67 1.68-2.63V28.09a2 2 0 00-1.68-1.92l-31.37-5.74H36a2.39 2.39 0 00-2.39 2.39v6.71l24.9 3.35z">
                                    </path>
                                    <path
                                        d="M60.18 54c-1.2-5.27-1.44-4.55-5.75-4.79L40.78 48v-3.87h5.51A4.09 4.09 0 0050.36 41l1-3.35L32.4 35l-5 12.22 11.74 17-5.54 18.47L49.88 98l16.53-15.07s-6.23-28.5-6.23-29M49.88 2.23l-4.79 10.29 4.79 3.83 4.79-3.83zM62.1 9.41l1.43 6h6l2.87-11zM30.25 15.4h6l.24-.72 1.2-5.27-10.3-5z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <button class="mage text-white w-5/6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="mageFill">
                                    <path
                                        d="M84.48 77.3h13.41l-3.83-12.93h-9.58a36.73 36.73 0 00-27.54 12.45L50 85l-6.94-8.14a36.73 36.73 0 00-27.54-12.49H5.94L2.11 77.3h13.41a36.73 36.73 0 0127.54 12.45l.71.72h-9.1v7.42h30.9v-7.42h-9.1l.71-.72a35.85 35.85 0 0127.3-12.45">
                                    </path>
                                    <path
                                        d="M56.23 54.31L50 62.21l-6.23-7.9a5.42 5.42 0 01-.24-6.47L50 37.31l6.47 10.53a5.42 5.42 0 01-.24 6.47M42.58 28.93l-7.91 12.69a13.37 13.37 0 00.72 15.09L50 75.14l14.61-18.43a13 13 0 00.72-15.09L50 17l-.48.72a5.58 5.58 0 01-4.31 1.68c-4.07 0-7.18-8.62 4.55-17.24 0 0-28.74 5.5-14.85 30.41z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <button class="marksmen text-white w-5/6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="marksmenFill">
                                    <path
                                        d="M28.69 27.25h6.94l1.92-6.94-13.41-7.91zM71.31 27.25l4.55-14.85-13.41 7.91 1.92 6.94zM71.31 35.39c-1.43 0-12.21-3.83-12.21-3.83L50 42.34l-9.1-10.78s-10.54 3.83-12.21 3.83c-7.67 0-4.79-7.18-4.79-7.18S4.26 48.32 2.11 64.13c0 0 5.74-8.86 24.42-13.17a26.22 26.22 0 0013.89 12.93c-.72-3.11-1.44-6.71-2.15-10.06a22.36 22.36 0 01-3.84-4.31c.72 0 7.19-.72 8.15-.72.71 2.64 4.55 28.74 4.55 28.74l-7 10.3v10L50 93.82l9.82 4.07V87.6l-7-10.3s3.84-26.1 4.55-28.74c.72 0 7.19.72 8.15.72a16.52 16.52 0 01-3.84 4.31 98.08 98.08 0 00-2.15 10.06 25.33 25.33 0 0013.94-12.93c18.68 4.55 24.42 13.17 24.42 13.17C95.74 48.32 76.1 28 76.1 28s2.88 7.42-4.79 7.42">
                                    </path>
                                    <path d="M50 2.11l-7.66 21.31h.24L50 33.24l7.42-9.82h.24z"></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <button class="support text-white w-5/6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="supportFill">
                                    <path
                                        d="M90.4 2.11c0 27.3-25.4 36.63-25.4 36.63L60.94 61a8.39 8.39 0 00-.48 2.39 6.95 6.95 0 0013.89 0 6.7 6.7 0 00-5.75-6.7c6.71-11.5 16.29-6 16.29-6 1.43-1.44 2.63-2.88 3.83-4.07l-7.19-2.88h9.34a38.5 38.5 0 005.75-11.25L87 28.69h10.3a33 33 0 00-6.9-26.58M35.32 38.74S9.93 29.41 9.93 2.11c0 0-9.82 10.77-7.42 26.1h10.3L3.23 32a41.09 41.09 0 004.07 8.9h11l-8.61 3.59a39.83 39.83 0 005.27 6s9.58-5.51 16.29 6a6.7 6.7 0 00-5.75 6.7 6.95 6.95 0 1013.41-2.39zM45.14 22.7l2.63-6.7h4.79l2.63 6.94-5 13.89zm-1-16l-7 16 10.15 25.38v23.71l-5 16 5 10H53l5-10-5-16V48.08L63.1 22.7l-7-16z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <button class="tank text-white w-5/6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="tankFill">
                                    <path
                                        d="M85.92 63.89L55 90V67.48h7.42v-9.1H37.55v9.1H45v22.75L14.08 63.89 8.33 21l27.54-10.51a39.13 39.13 0 0128.26 0L91.67 21zM66.28 5a47.61 47.61 0 00-32.56 0L2.11 17.19l6.7 49.57L41.86 95A13 13 0 0050 97.89 12.5 12.5 0 0058.14 95l33.05-28.24 6.7-49.57z">
                                    </path>
                                    <path
                                        d="M78.74 32.28L62 21.26v5.27H38v-5.27l-16.26 7.19a2.9 2.9 0 00-1.67 3.11l4.31 19.16a3.22 3.22 0 002.15 2.15l11.26 2.4V50h23.94v5.27l11.5-2.4a2.52 2.52 0 002.15-2.15l4.31-15.57a2.39 2.39 0 00-1-2.87M57.42 20.07H42.58L50 11.68z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="classDescribe pt-2 flex justify-center items-center">
                    <div class="assassinDescribe flex gap-12 w-3/6">
                        <div class="imageContainer">
                            <atropos class="atropos w-full">
                                <img class="imageContainerAssassin" src="/assets/Champions/pyke1.jpeg" alt="">
                            </atropos>
                        </div>
                        <div class="flex flex-col">
                            <h1 class="textTitleContainerAssassin text-start">Assassin</h1>
                            <p class="textDescribeContainerAssassin text-white text-start">Assassins specialize in
                                infiltrating
                                enemy lines with their
                                unrivaled mobility to quickly dispatch high-priority targets. Due to their mostly melee
                                nature, Assassins must put them themselves into dangerous positions in order to execute
                                their targets. Luckily, they often have defensive tricks up their sleeves that, if used
                                cleverly, allow them to effectively avoid incoming damage.</p>
                            <div class="flex flex-auto justify-center">
                                <router-link to='/champions'>
                                    <button class="championsButtonAssassin self-end">See all champions</button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="fightersDescribe flex gap-12 w-3/6">
                        <div class="imageContainer">
                            <atropos class="atropos w-full">
                                <img class="imageContainerFighters" src="/assets/Champions/belveth1.jpeg" alt="">
                            </atropos>
                        </div>
                        <div class="flex flex-col">
                            <h1 class="textTitleContainerFighters text-start">Fighters</h1>
                            <p class="textDescribeContainerFighters text-white text-start">Fighters (also known as
                                Bruisers) are a diverse group of short-ranged combatants who excel at both dealing and
                                surviving damage. With easy access to heavy, continuous damage (or DPS) and a host of
                                innate defenses, fighters thrive in extended fights as they seek out enemies to take
                                down, but their limited range puts them at constant risk of being kept at bay (or kited)
                                by their opponents via crowd control, range and mobility.</p>
                            <div class="flex flex-auto justify-center">
                                <router-link to='/champions'>
                                    <button class="championsButtonFighters self-end">See all champions</button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="mageDescribe flex gap-12 w-3/6">
                        <div class="imageContainer">
                            <atropos class="atropos w-full">
                                <img class="imageContainerMage" src="/assets/Champions/seraphine1.jpeg" alt="">
                            </atropos>
                        </div>
                        <div class="flex flex-col">
                            <h1 class="textTitleContainerMage text-start">Mage</h1>
                            <p class="textDescribeContainerMage text-white text-start">Mages are champions who typically
                                possess great reach, ability-based area of effect damage and crowd control, and who use
                                all of these strengths in tandem with each other to trap and destroy enemies from a
                                distance. Specializing in magic damage, often burst damage, and therefore investing
                                heavily in items that allow them to cast stronger and faster spells, mages excel at
                                chaining their abilities together in powerful combos in order to win fights, though
                                their abilities also tend to be difficult to land and can be mitigated, if not avoided
                                completely, by their targets if they react in time.</p>
                            <div class="flex flex-auto justify-center">
                                <router-link to='/champions'>
                                    <button class="championsButtonMage self-end">See all champions</button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="marksmenDescribe flex gap-12 w-3/6">
                        <div class="imageContainer">
                            <atropos class="atropos w-full">
                                <img class="imageContainerMarksmen" src="/assets/Champions/twitch1.jpeg" alt="">
                            </atropos>
                        </div>
                        <div class="flex flex-col">
                            <h1 class="textTitleContainerMarksmen text-start">Marksmen</h1>
                            <p class="textDescribeContainerMarksmen text-white text-start">Marksmen are ranged champions
                                whose power almost exclusively revolves around their basic attacks: using their reach to
                                land massive continuous damage from a distance, marksmen are capable of taking down even
                                the toughest of opponents when positioned behind the safety of their team, and excel at
                                securing map objectives such as Dragon, Baron Nashor and turrets.
                            </p>
                            <div class="flex flex-auto justify-center">
                                <router-link to='/champions'>
                                    <button class="championsButtonMarksmen self-end">See all champions</button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="supportsDescribe flex gap-12 w-3/6">
                        <div class="imageContainer">
                            <atropos class="atropos w-full">
                                <img class="imageContainerSupports" src="/assets/Champions/janna1.jpeg" alt="">
                            </atropos>
                        </div>
                        <div class="flex flex-col">
                            <h1 class="textTitleContainerSupports text-start">Supports</h1>
                            <p class="textDescribeContainerSupports text-white text-start">Within a drafted team, the
                                Support is one of the two champions assigned to the bottom lane alongside the Bottom
                                icon.png Bottom Carry. This role's initial goal is to assist their more vulnerable team
                                mate through the earliest stages of the game, and is a position that suits champions
                                with either utility, disengage or high base damage.</p>
                            <div class="flex flex-auto justify-center">
                                <router-link to='/champions'>
                                    <button class="championsButtonSupports self-end">See all champions</button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="tankDescribe flex gap-12 w-3/6">
                        <div>
                            <atropos class="atropos w-full">
                                <img class="imageContainerTank" src="/assets/Champions/ornn1.jpeg" alt="">
                            </atropos>
                        </div>
                        <div class="flex flex-col">
                            <h1 class="textTitleContainerTank text-start">Tanks</h1>
                            <p class="textDescribeContainerTank text-white text-start">Tanks are tough melee champions
                                who sacrifice damage in exchange for powerful crowd control. While able to engage
                                enemies in combat, a tank's purpose isn't usually to kill opponents; rather, tanks excel
                                at disrupting enemies and diverting focus to themselves, allowing them to lock down
                                specific targets (or several targets at once), as well as remove (or peel) threats from
                                their allies.</p>
                            <div class="flex flex-auto justify-center">
                                <router-link to='/champions'>
                                    <button class="championsButtonTank self-end">See all champions</button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap'
import Atropos from 'atropos/vue';

export default {
    components: {
        Atropos,
    },

    methods: {
        displayContent() {
            var assassinButton = document.querySelector('.assassin')
            var fightersButton = document.querySelector('.fighters')
            var mageButton = document.querySelector('.mage')
            var marksmenButton = document.querySelector('.marksmen')
            var supportButton = document.querySelector('.support')
            var tankButton = document.querySelector('.tank')

            document.querySelector('.assassinDescribe').style.display = "none"
            document.querySelector('.fightersDescribe').style.display = "none"
            document.querySelector('.mageDescribe').style.display = "none"
            document.querySelector('.marksmenDescribe').style.display = "none"
            document.querySelector('.supportsDescribe').style.display = "none"
            document.querySelector('.tankDescribe').style.display = "none"

            var assassinFill = document.querySelector('#assassinFill')
            var fightersFill = document.querySelector('#fightersFill')
            var mageFill = document.querySelector('#mageFill')
            var marksmenFill = document.querySelector('#marksmenFill')
            var supportFill = document.querySelector('#supportFill')
            var tankFill = document.querySelector('#tankFill')

            assassinButton.addEventListener('click', () => {
                assassinFill.style.fill = "rgb(255, 255, 255, 100%)"
                fightersFill.style.fill = "rgb(255, 255, 255, 25%)"
                mageFill.style.fill = "rgb(255, 255, 255, 25%)"
                marksmenFill.style.fill = "rgb(255, 255, 255, 25%)"
                supportFill.style.fill = "rgb(255, 255, 255, 25%)"
                tankFill.style.fill = "rgb(255, 255, 255, 25%)"
                const show = gsap.timeline()
                    .add('start')

                    .to('.fightersDescribe', {
                        opacity: 0,
                        display: 'none'
                    }, 'start')
                    .to('.marksmenDescribe', {
                        opacity: 0,
                        display: 'none'
                    }, 'start')
                    .to('.supportsDescribe', {
                        opacity: 0,
                        display: 'none'
                    }, 'start')
                    .to('.mageDescribe', {
                        opacity: 0,
                        display: 'none'
                    }, 'start')
                    .to('.tankDescribe', {
                        opacity: 0,
                        display: 'none'
                    }, 'start')
                    .to('.assassinDescribe', {
                        opacity: 1,
                        display: '',
                    })

                    .add('hello')

                    .fromTo('.imageContainerAssassin', {
                        opacity: 0,
                    }, {
                        opacity: 1,
                        display: '',
                    })

                    .fromTo('.textTitleContainerAssassin', {
                        x: 200,
                        opacity: 0,
                    }, {
                        x: 0,
                        opacity: 1,
                        duration: 2,
                        display: '',
                    }, 'hello')

                    .fromTo('.textDescribeContainerAssassin', {
                        x: 300,
                        opacity: 0,
                    }, {
                        x: 0,
                        opacity: 1,
                        duration: 3,
                        display: '',
                    }, 'hello')

                    .fromTo('.championsButtonAssassin', {
                        y: 50,
                        opacity: 0,
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 2,
                        display: '',
                    }, 'hello')

            })

            fightersButton.addEventListener('click', () => {
                assassinFill.style.fill = "rgb(255, 255, 255, 25%)"
                fightersFill.style.fill = "rgb(255, 255, 255, 100%)"
                mageFill.style.fill = "rgb(255, 255, 255, 25%)"
                marksmenFill.style.fill = "rgb(255, 255, 255, 25%)"
                supportFill.style.fill = "rgb(255, 255, 255, 25%)"
                tankFill.style.fill = "rgb(255, 255, 255, 25%)"

                const show = gsap.timeline()
                    .add('start')

                    .to('.assassinDescribe', {
                        opacity: 0,
                        display: 'none'
                    })
                    .to('.marksmenDescribe', {
                        opacity: 0,
                        display: 'none'
                    }, 'start')
                    .to('.supportsDescribe', {
                        opacity: 0,
                        display: 'none'
                    }, 'start')
                    .to('.mageDescribe', {
                        opacity: 0,
                        display: 'none'
                    }, 'start')
                    .to('.tankDescribe', {
                        opacity: 0,
                        display: 'none'
                    }, 'start')
                    .to('.fightersDescribe', {
                        opacity: 1,
                        display: ''
                    })

                    .add('hello')

                    .fromTo('.imageContainerFighters', {
                        opacity: 0,
                    }, {
                        opacity: 1,
                        display: '',
                    }, 'hello')

                    .fromTo('.textTitleContainerFighters', {
                        x: 200,
                        opacity: 0,
                    }, {
                        x: 0,
                        opacity: 1,
                        duration: 2,
                        display: ''
                    }, 'hello')

                    .fromTo('.textDescribeContainerFighters', {
                        x: 300,
                        opacity: 0,
                    }, {
                        x: 0,
                        opacity: 1,
                        duration: 3,
                        display: ''
                    }, 'hello')

                    .fromTo('.championsButtonFighters', {
                        y: 50,
                        opacity: 0,
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 2,
                        display: ''
                    }, 'hello')

            })

            mageButton.addEventListener('click', () => {
                assassinFill.style.fill = "rgb(255, 255, 255, 25%)"
                fightersFill.style.fill = "rgb(255, 255, 255, 25%)"
                mageFill.style.fill = "rgb(255, 255, 255, 100%)"
                marksmenFill.style.fill = "rgb(255, 255, 255, 25%)"
                supportFill.style.fill = "rgb(255, 255, 255, 25%)"
                tankFill.style.fill = "rgb(255, 255, 255, 25%)"
                const show = gsap.timeline()
                    .add('start')

                    .to('.assassinDescribe', {
                        opacity: 0,
                        display: 'none'
                    })
                    .to('.marksmenDescribe', {
                        opacity: 0,
                        display: 'none'
                    }, 'start')
                    .to('.supportsDescribe', {
                        opacity: 0,
                        display: 'none'
                    }, 'start')
                    .to('.fightersDescribe', {
                        opacity: 0,
                        display: 'none'
                    }, 'start')
                    .to('.tankDescribe', {
                        opacity: 0,
                        display: 'none'
                    }, 'start')
                    .to('.mageDescribe', {
                        opacity: 1,
                        display: ''
                    })

                    .add('hello')

                    .fromTo('.imageContainerMage', {
                        opacity: 0,
                    }, {
                        opacity: 1,
                        display: '',
                    }, 'hello')

                    .fromTo('.textTitleContainerMage', {
                        x: 200,
                        opacity: 0,
                    }, {
                        x: 0,
                        opacity: 1,
                        duration: 2,
                        display: ''
                    }, 'hello')

                    .fromTo('.textDescribeContainerMage', {
                        x: 300,
                        opacity: 0,
                    }, {
                        x: 0,
                        opacity: 1,
                        duration: 3,
                        display: ''
                    }, 'hello')

                    .fromTo('.championsButtonMage', {
                        y: 50,
                        opacity: 0,
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 2,
                        display: ''
                    }, 'hello')

            })

            marksmenButton.addEventListener('click', () => {
                assassinFill.style.fill = "rgb(255, 255, 255, 25%)"
                fightersFill.style.fill = "rgb(255, 255, 255, 25%)"
                mageFill.style.fill = "rgb(255, 255, 255, 25%)"
                marksmenFill.style.fill = "rgb(255, 255, 255, 100%)"
                supportFill.style.fill = "rgb(255, 255, 255, 25%)"
                tankFill.style.fill = "rgb(255, 255, 255, 25%)"
                const show = gsap.timeline()
                    .add('start')

                    .to('.assassinDescribe', {
                        opacity: 0,
                        display: 'none'
                    })
                    .to('.mageDescribe', {
                        opacity: 0,
                        display: 'none'
                    }, 'start')
                    .to('.supportsDescribe', {
                        opacity: 0,
                        display: 'none'
                    }, 'start')
                    .to('.fightersDescribe', {
                        opacity: 0,
                        display: 'none'
                    }, 'start')
                    .to('.tankDescribe', {
                        opacity: 0,
                        display: 'none'
                    }, 'start')
                    .to('.marksmenDescribe', {
                        opacity: 1,
                        display: ''
                    })

                    .add('hello')

                    .fromTo('.imageContainerMarksmen', {
                        opacity: 0,
                    }, {
                        opacity: 1,
                        display: '',
                    }, 'hello')

                    .fromTo('.textTitleContainerMarksmen', {
                        x: 200,
                        opacity: 0,
                    }, {
                        x: 0,
                        opacity: 1,
                        duration: 2,
                        display: ''
                    }, 'hello')

                    .fromTo('.textDescribeContainerMarksmen', {
                        x: 300,
                        opacity: 0,
                    }, {
                        x: 0,
                        opacity: 1,
                        duration: 3,
                        display: ''
                    }, 'hello')

                    .fromTo('.championsButtonMarksmen', {
                        y: 50,
                        opacity: 0,
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 2,
                        display: ''
                    }, 'hello')

            })

            supportButton.addEventListener('click', () => {
                assassinFill.style.fill = "rgb(255, 255, 255, 25%)"
                fightersFill.style.fill = "rgb(255, 255, 255, 25%)"
                mageFill.style.fill = "rgb(255, 255, 255, 25%)"
                marksmenFill.style.fill = "rgb(255, 255, 255, 25%)"
                supportFill.style.fill = "rgb(255, 255, 255, 100%)"
                tankFill.style.fill = "rgb(255, 255, 255, 25%)"
                const show = gsap.timeline()
                    .add('start')

                    .to('.assassinDescribe', {
                        opacity: 0,
                        display: 'none'
                    })
                    .to('.mageDescribe', {
                        opacity: 0,
                        display: 'none'
                    }, 'start')
                    .to('.marksmenDescribe', {
                        opacity: 0,
                        display: 'none'
                    }, 'start')
                    .to('.fightersDescribe', {
                        opacity: 0,
                        display: 'none'
                    }, 'start')
                    .to('.tankDescribe', {
                        opacity: 0,
                        display: 'none'
                    }, 'start')
                    .to('.supportsDescribe', {
                        opacity: 1,
                        display: ''
                    })

                    .add('hello')

                    .fromTo('.imageContainerSupports', {
                        opacity: 0,
                    }, {
                        opacity: 1,
                        display: '',
                    }, 'hello')

                    .fromTo('.textTitleContainerSupports', {
                        x: 200,
                        opacity: 0,
                    }, {
                        x: 0,
                        opacity: 1,
                        duration: 2,
                        display: ''
                    }, 'hello')

                    .fromTo('.textDescribeContainerSupports', {
                        x: 300,
                        opacity: 0,
                    }, {
                        x: 0,
                        opacity: 1,
                        duration: 3,
                        display: ''
                    }, 'hello')

                    .fromTo('.championsButtonSupports', {
                        y: 50,
                        opacity: 0,
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 2,
                        display: ''
                    }, 'hello')

            })

            tankButton.addEventListener('click', () => {
                assassinFill.style.fill = "rgb(255, 255, 255, 25%)"
                fightersFill.style.fill = "rgb(255, 255, 255, 25%)"
                mageFill.style.fill = "rgb(255, 255, 255, 25%)"
                marksmenFill.style.fill = "rgb(255, 255, 255, 25%)"
                supportFill.style.fill = "rgb(255, 255, 255, 25%)"
                tankFill.style.fill = "rgb(255, 255, 255, 100%)"
                const show = gsap.timeline()
                    .add('start')

                    .to('.assassinDescribe', {
                        opacity: 0,
                        display: 'none'
                    })
                    .to('.mageDescribe', {
                        opacity: 0,
                        display: 'none'
                    }, 'start')
                    .to('.marksmenDescribe', {
                        opacity: 0,
                        display: 'none'
                    }, 'start')
                    .to('.fightersDescribe', {
                        opacity: 0,
                        display: 'none'
                    }, 'start')
                    .to('.supportsDescribe', {
                        opacity: 0,
                        display: 'none'
                    }, 'start')
                    .to('.tankDescribe', {
                        opacity: 1,
                        display: ''
                    })

                    .add('hello')

                    .fromTo('.imageContainerTank', {
                        opacity: 0,
                    }, {
                        opacity: 1,
                        display: '',
                    }, 'hello')

                    .fromTo('.textTitleContainerTank', {
                        x: 200,
                        opacity: 0,
                    }, {
                        x: 0,
                        opacity: 1,
                        duration: 2,
                        display: ''
                    }, 'hello')

                    .fromTo('.textDescribeContainerTank', {
                        x: 300,
                        opacity: 0,
                    }, {
                        x: 0,
                        opacity: 1,
                        duration: 3,
                        display: ''
                    }, 'hello')

                    .fromTo('.championsButtonTank', {
                        y: 50,
                        opacity: 0,
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 2,
                        display: ''
                    }, 'hello')

            })

        },

        parallax() {
            var image = document.querySelector('.imageContainer')

            image.addEventListener('mouseenter', () => {
                image.addEventListener('mousemove', () => {

                })
            })
        }
    },

    mounted() {
        this.displayContent();
        this.parallax();
    },

    setup() {
        const onEnter = () => console.log('Enter');
        const onLeave = () => console.log('Leave');
        const onRotate = (x, y) => console.log('Rotate', x, y);
        return {
            onEnter,
            onLeave,
            onRotate,
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

#assassinFill {
    fill: rgb(255, 255, 255, 25%);
}

#fightersFill {
    fill: rgb(255, 255, 255, 25%);
}

#mageFill {
    fill: rgb(255, 255, 255, 25%);
}

#marksmenFill {
    fill: rgb(255, 255, 255, 25%);
}

#supportFill {
    fill: rgb(255, 255, 255, 25%);
}

#tankFill {
    fill: rgb(255, 255, 255, 25%);
}

.main {
    width: 100%;
    height: 100vh;
    background-image: url('/assets/image1.jpeg');
    object-fit: contain;

}

.submain {
    width: 100%;
    height: 100vh;
    background: linear-gradient(to top, rgba(0, 0, 0, 100%), rgba(0, 0, 0, 70%), rgba(0, 0, 0, 100%));
    backdrop-filter: grayscale(100%);
}

.imageContainer {
    width: 300px;
    height: 450px;
}

.content {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.firstTitle {
    font-family: 'Crimson Pro', sans-serif;
    font-size: 80px;
}

.secondTitle {
    font-family: 'Crimson Pro', sans-serif;
    font-size: 40px;
    padding-top: 25px;
    color: white;
}

.classDescribe {
    flex: 1 1 auto;

}

.textTitleContainerAssassin {
    font-family: 'Kanit', sans-serif;
    font-weight: 600;
    font-size: 60px;
    color: white;
    text-transform: uppercase;
    font-style: italic;
    background: linear-gradient(to right, #6AAB98, rgb(0, 154, 178));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.textDescribeContainerAssassin {
    font-family: 'Kanit', sans-serif;
    font-weight: 300;
    font-size: 20px;
    color: white;
}

.atropos {
    width: 300px;
    height: 450px;
}

.imageContainerAssassin {
    width: 300px;
    height: 450px;
    object-fit: cover;
    border-radius: 5%;
}

.championsButtonAssassin {
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    background: linear-gradient(to left, #6AAB98, rgb(0, 178, 154));
    border: solid 2px;
    border-color: rgb(0, 178, 154);
    border-radius: 99999px 0 99999px 0;
    padding-top: 0.25em;
    padding-bottom: 0.25em;
    padding-left: 1em;
    padding-right: 1em;
    color: white;

}

.textTitleContainerFighters {
    font-family: 'Kanit', sans-serif;
    font-weight: 600;
    font-size: 60px;
    color: white;
    text-transform: uppercase;
    font-style: italic;
    background: linear-gradient(to right, #d68be9, #8C16C1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.textDescribeContainerFighters {
    font-family: 'Kanit', sans-serif;
    font-weight: 300;
    font-size: 20px;
    color: white;
}

.imageContainerFighters {
    width: 300px;
    height: 450px;
    object-fit: cover;
    border-radius: 5%;
}

.championsButtonFighters {
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    background: linear-gradient(to left, #d68be9, #8C16C1);
    border: solid 2px;
    border-color: #8C16C1;
    border-radius: 99999px 0 99999px 0;
    padding-top: 0.25em;
    padding-bottom: 0.25em;
    padding-left: 1em;
    padding-right: 1em;
    color: white;

}

.textTitleContainerMage {
    font-family: 'Kanit', sans-serif;
    font-weight: 600;
    font-size: 60px;
    color: white;
    text-transform: uppercase;
    font-style: italic;
    background: linear-gradient(to left, #f53aaa, #fff3a2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.textDescribeContainerMage {
    font-family: 'Kanit', sans-serif;
    font-weight: 300;
    font-size: 17px;
    color: white;
}

.imageContainerMage {
    width: 300px;
    height: 450px;
    object-fit: cover;
    border-radius: 5%;
}

.championsButtonMage {
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    background: linear-gradient(to right, #f53aaa, #fff3a2);
    border: solid 2px;
    border-color: #f53aaa;
    border-radius: 99999px 0 99999px 0;
    padding-top: 0.25em;
    padding-bottom: 0.25em;
    padding-left: 1em;
    padding-right: 1em;
    color: white;

}

.textTitleContainerMarksmen {
    font-family: 'Kanit', sans-serif;
    font-weight: 600;
    font-size: 60px;
    color: white;
    text-transform: uppercase;
    font-style: italic;
    background: linear-gradient(to right, #74D350, #1C333B);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.textDescribeContainerMarksmen {
    font-family: 'Kanit', sans-serif;
    font-weight: 300;
    font-size: 20px;
    color: white;
}

.imageContainerMarksmen {
    width: 300px;
    height: 450px;
    object-fit: cover;
    border-radius: 5%;
}

.championsButtonMarksmen {
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    background: linear-gradient(to left, #74D350, #1C333B);
    border: solid 2px;
    border-color: #1C333B;
    border-radius: 99999px 0 99999px 0;
    padding-top: 0.25em;
    padding-bottom: 0.25em;
    padding-left: 1em;
    padding-right: 1em;
    color: white;

}

.textTitleContainerSupports {
    font-family: 'Kanit', sans-serif;
    font-weight: 600;
    font-size: 60px;
    color: white;
    text-transform: uppercase;
    font-style: italic;
    background: linear-gradient(to right, #53F8FD, #ebfeff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.textDescribeContainerSupports {
    font-family: 'Kanit', sans-serif;
    font-weight: 300;
    font-size: 20px;
    color: white;
}

.imageContainerSupports {
    width: 300px;
    height: 450px;
    object-fit: cover;
    object-position: 85% center;
    border-radius: 5%;
}

.championsButtonSupports {
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    background: linear-gradient(to right, #002363, #16e2ed);
    border: solid 2px;
    border-color: #002363;
    border-radius: 99999px 0 99999px 0;
    padding-top: 0.25em;
    padding-bottom: 0.25em;
    padding-left: 1em;
    padding-right: 1em;
    color: white;

}

.textTitleContainerTank {
    font-family: 'Kanit', sans-serif;
    font-weight: 600;
    font-size: 60px;
    color: white;
    text-transform: uppercase;
    font-style: italic;
    background: linear-gradient(to right, #F23A52, #290B17);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.textDescribeContainerTank {
    font-family: 'Kanit', sans-serif;
    font-weight: 300;
    font-size: 20px;
    color: white;
}

.imageContainerTank {
    width: 300px;
    height: 450px;
    object-fit: cover;
    border-radius: 5%;
}

.championsButtonTank {
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    background: linear-gradient(to left, #F23A52, #290B17);
    border: solid 2px;
    border-color: #290B17;
    border-radius: 99999px 0 99999px 0;
    padding-top: 0.25em;
    padding-bottom: 0.25em;
    padding-left: 1em;
    padding-right: 1em;
    color: white;

}
</style>