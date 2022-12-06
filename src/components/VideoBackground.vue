<template>
    <div>
        <div class="videoContainer">
            <video autoplay muted loop id="videoTest">
                <source src="@/assets/video.mp4" type="video/mp4">
            </video>
        </div>
        <div class="videoContent text-white text-4xl w-full">
            <h1 class="videoText">What's new about Pre-Season ?</h1>
            <p class="paragraph">The 2023 preseason changes will begin to arrive on the PBE tomorrow! Before they
                roll
                out, we wanted to
                show you the changes you'll see in the coming weeks. We're rolling them out a little early this year
                to
                take the time to test the changes and get your feedback, so feel free to play... because there's a
                lot
                to try!</p>
            <div class="buttonContainer">
                <button
                    class="px-8 py-1 rounded-xl content-center hover:scale-105 hover:transition duration-200 shadow-2xl">More
                    Informations</button>
            </div>
        </div>
        <div class="buttonVideo">
            <button class="text-white px-4 py-2 rounded-xl flex justify-center items-center " id="mutedButton">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6" id="unmute">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6" id="mute">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
                </svg>
            </button>
            <button class="text-white px-4 py-2 rounded-xl flex justify-center items-center" id="stopButton">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6" id="play">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6" id="pause">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                </svg>
            </button>
            <button class="text-white px-4 py-2 rounded-xl flex justify-center items-center" id="repeatButton">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>

export default {

    methods: {
        videoMuted() {
            var mute = document.querySelector('#mutedButton')
            var video = document.querySelector('#videoTest')
            var unmutelogo = document.querySelector('#unmute')
            var mutelogo = document.querySelector('#mute')

            unmutelogo.style.display = "none"

            mute.addEventListener('click', () => {
                if (video.muted === true) {
                    video.muted = false;
                    mutelogo.style.display = "none"
                    unmutelogo.style.display = "block"
                } else {
                    video.muted = true
                    mutelogo.style.display = "block"
                    unmutelogo.style.display = "none"
                }
            })
        },

        videoStop() {
            var stop = document.querySelector('#stopButton')
            var video = document.querySelector('#videoTest')
            var pauseLogo = document.querySelector('#pause')
            var playLogo = document.querySelector('#play')

            pauseLogo.style.display = "none"

            stop.addEventListener('click', () => {
                if (video.paused) {
                    video.play();
                    pauseLogo.style.display = "none"
                    playLogo.style.display = "block"
                } else {
                    video.pause()
                    pauseLogo.style.display = "block"
                    playLogo.style.display = "none"
                }
            })
        },

        videoRepeat() {
            var repeat = document.querySelector('#repeatButton')
            var video = document.querySelector('#videoTest')

            repeat.addEventListener('click', () => {
                video.pause()
                video.currentTime = 0;
                video.play()
            })
        },

        checkLogo() {
            var unmutelogo = document.querySelector('#unmute')
            var mutelogo = document.querySelector('#mute')
            var pauselogo = document.querySelector('#pause')
            var playlogo = document.querySelector('#play')

            if (unmutelogo.style.display = "none") {
                mutelogo.style.display = "block"
            } else {
                unmutelogo.style.display = "none"
            }

            if (pauselogo.style.display = "none") {
                playlogo.style.display = "block"
            } else {
                pauselogo.style.display = "none"
            }
        }
    },

    mounted() {
        this.videoMuted();
        this.videoRepeat();
        this.videoStop();
        this.checkLogo();
    },

}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.videoContainer{
    width: 100%;
    height: 100vh;
}

.videoTest {
    position: relative;
    min-width: 100%;
    min-height: 100px;
    width: auto;
    height: 100px;
    z-index: 0;
}

.videoContent {
    position: absolute;
    width: 50%;
    top: 40%;
    left: 10%;
    z-index: 1;
}

.videoText {
    font-family: 'Kanit', sans-serif;
    font-weight: 600;
    font-size: 100px;
    line-height: 100px;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 5px 0 #000, 1px 5px 0 #000;
}



p {
    font-family: 'Kanit', sans-serif;
    font-weight: 200;
    font-size: 20px;
    line-height: 20px;
    width: 90%;
    padding-bottom: 20px;
}

.buttonContainer {
    width: 90%;
    display: flex;
    justify-content: center;
}

.buttonVideo {
    position: absolute;
    width: 100%;
    top: 90%;
    display: flex;
    justify-content: flex-end;
    padding-left: 20px;
    padding-right: 20px;
    gap: 10px
        /* margin-top: -100px; */
}

button {
    font-family: 'Crimson Pro', sans-serif;
    font-size: 20px;
    font-weight: 500;
    display: flex;
    background: radial-gradient(#D22A36, #4a0e12);
}
</style>