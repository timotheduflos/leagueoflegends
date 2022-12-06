<template>
    <div class="main">
        <div class="submain text-white">
            <div class="content text-center">
                <h1 class="firstTitle text-4xl text-white">II - Type of Match</h1>
                <div class="slider">
                    <div class="sliderWrapper">
                        <button class="slideToLeft">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="white" class="w-10 h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <ul class="slide-container">
                            <li class="slide1 text-4xl">
                                <img class="imageGameMode" src="/assets/GameMode/aram.jpeg" alt="">
                            </li>
                            <li class="slide2 text-4xl">
                                <video autoplay muted loop class="imageGameMode" id="video">
                                    <source src="/assets/SRTrailer.mp4">
                                </video>
                            </li>
                            <li class="slide3 text-4xl">
                                <img class="iimageGameMode" src="/assets/GameMode/tft.jpg" alt="">
                            </li>
                        </ul>
                        <button class="slideToRight">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="white" class="w-10 h-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                    <div class="slideContent1">
                        <div>
                            <h1 class="titleContent1">Aram</h1>
                        </div>
                        <div class="separationPart1">
                            <img src="/assets/GameMode/Vector.svg" alt="">
                        </div>
                        <div class="describeContent">
                            <div class="descriibeContent1">
                                <p>ARAM (or All Random All Mid) is a game mode in League of Legends in a 5v5 format
                                    on
                                    the Howling Abyss icon.png Howling Abyss with the objective to destroy the
                                    opposing
                                    team's nexus. It was released on June 29, 2012. Players are given random
                                    champions
                                    from the available champion pool and are able to trade or reroll their picks.
                                    <br>
                                    <br>
                                    Before it was introduced, ARAM was originally played in custom games on the
                                    Summoner's Rift map focusing only on 5v5 fights with no lane phase or jungling.
                                    After a Thunderdome event, the Proving Grounds map was revamped from being
                                    solely for tutorials, to a playable custom map. Later, the Howling Abyss replaced
                                    Proving
                                    Grounds and ARAM was made an official queue (Patch 3.6).
                                    <br>
                                    <br>
                                    Each side of the Howling Abyss icon.png Howling Abyss has two lane turrets, two
                                    patches of brushes, two health relics, one inhibitor, two nexus turrets, a nexus
                                    and
                                    a shopkeeper. The map was replaced with Butcher's Bridge during Bilgewater
                                    events
                                    (Burning Tides, Curse of the Drowned).
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="slideContent2">
                        <div>
                            <h1 class="titleContent2">Summoner's Rift</h1>
                        </div>
                        <div class="separationPart2">
                            <img src="/assets/GameMode/Vector.svg" alt="">
                        </div>
                        <div class="describeContent">
                            <div class="descriibeContent2">
                                <p>The objective of Summoner's Rift is simple – destroy the enemy nexus. <br> In order
                                    to do
                                    this, champions must traverse down one of three different paths (or lanes) in order
                                    to attack their enemy at their weakest points they can exploit.<br><br> Both teams
                                    have
                                    their lanes defended by numerous turrets; each turret grows in strength the closer
                                    it gets to its respective nexus and each turret must be eliminated in order to gain
                                    access to the next turret in that lane. <br><br>Cooperating with fellow summoners is
                                    an
                                    absolute requirement for success, as it is easy for a champion to find themselves
                                    ambushed by enemies in the lanes of the Rift.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="slideContent3">
                        <div>
                            <h1 class="titleContent3">Teamfight Tactics</h1>
                        </div>
                        <div class="separationPart3">
                            <img src="/assets/GameMode/Vector.svg" alt="">
                        </div>
                        <div class="describeContent">
                            <div class="descriibeContent3">
                                <p>Based on Dota Auto Chess, a mod for Dota 2, the game centers around eight players who
                                    construct teams to fight one another and be the last player standing. The
                                    battlefield consists of hexagons, where players can strategically place units on the
                                    hexagons on their side of the game board between rounds. <br>During each round, a
                                    short
                                    battle automatically commences, with two players matched randomly for that round, or
                                    else paired against computer-controlled enemies. In the rounds against
                                    computer-controlled enemies, each enemy has a chance to drop gold, units, or items
                                    that the player can use. Health lost from losing a round is
                                    calculated with a combination of set damage per round and how many units an opponent
                                    had still alive.
                                    <br><br>
                                    The game consist of stages and rounds. Each stage consist of seven rounds with the
                                    exception of stage 1. Stage 1 consist of three rounds of computer-controlled
                                    enemies. <br>On round four of each stage, there is a feature called the "Carousel",
                                    in
                                    which players have access to a free rotation of units with random equipped items to
                                    select from. During these shared rounds, the two players with the lowest health are
                                    able to choose their units first, followed by the next two players with the lowest
                                    health, and so on. If there are players with similar health points, the game will
                                    randomly choose the order. On the last round of each stage, players will face
                                    computer-controlled enemies.
                                </p>
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
export default {
    methods: {
        checkSlide() {
            var boutonLeft = document.querySelector('.slideToLeft')
            var boutonRight = document.querySelector('.slideToRight')

            var slide1 = document.querySelector('.slide1')
            var slide3 = document.querySelector('.slide3')
            var slide2 = document.querySelector('.slide2')

            var slideTitle1 = document.querySelector('.titleContent1')
            var slideTitle2 = document.querySelector('.titleContent2')
            var slideTitle3 = document.querySelector('.titleContent3')

            var slideDescribe1 = document.querySelector('.descriibeContent1')
            var slideDescribe2 = document.querySelector('.descriibeContent2')
            var slideDescribe3 = document.querySelector('.descriibeContent3')

            var separation1 = document.querySelector('.separationPart1')
            var separation2 = document.querySelector('.separationPart2')
            var separation3 = document.querySelector('.separationPart3')

            console.log(slideDescribe1)

            // var slideContent1 = document.querySelector('.slideContent1')
            // var slideContent3 = document.querySelector('.slideContent3')
            // var slideContent2 = document.querySelector('.slideContent2')

            var video = document.querySelector('#video')

            slide2.style.display = 'none'
            slideTitle2.style.display = 'none'
            separation2.style.display = 'none'
            slideDescribe2.style.display = 'none'

            slide3.style.display = 'none'
            separation3.style.display = 'none'
            slideTitle3.style.display = 'none'
            slideDescribe3.style.display = 'none'

            boutonRight.addEventListener('click', () => {
                if (slide1.style.display === '') {
                    gsap.timeline()
                        .add('test')
                        .fromTo(slide1, {
                            opacity: 1,
                        }, {
                            opacity: 0,
                            display: 'none',
                            duration: 0.5,
                        })

                        .fromTo(slide2, {
                            opacity: 0,
                        }, {
                            opacity: 1,
                            display: '',
                            duration: 1,
                        });

                    document.querySelector('#video').autoplay

                    gsap.timeline()
                        .fromTo(slideTitle1, {
                            opacity: 1,
                            x: 0
                        }, {
                            x: -200,
                            opacity: 0,
                            display: 'none',
                            duration: 1,
                        })

                        .fromTo(slideTitle2, {
                            display: '',
                            opacity: 0,
                            x: 200
                        }, {
                            x: 0,
                            opacity: 1,
                            duration: 1,
                        });

                    gsap.timeline()

                    .fromTo(separation1, {
                        }, {
                            display: 'none',
                            duration: 1,
                        })

                        .fromTo(separation2, {
                        }, {
                            display: '',
                            duration: 1,
                        });

                    gsap.timeline()
                        .fromTo(slideDescribe1, {
                            opacity: 1,
                        }, {
                            opacity: 0,
                            display: 'none',
                            duration: 1,
                        })


                        .fromTo(slideDescribe2, {
                            display: '',
                            opacity: 0,
                        }, {
                            opacity: 1,
                            duration: 1,
                        });
                }

                    else if (slide2.style.display === '') {
                        gsap.timeline()
                        .fromTo(slide2, {
                            opacity: 1,
                        }, {
                            opacity: 0,
                            display: 'none',
                            duration: 0.5,
                        })

                        .fromTo(slide3, {
                            opacity: 0,
                        }, {
                            opacity: 1,
                            display: '',
                            duration: 1,
                        });

                    gsap.timeline()
                        .fromTo(slideTitle2, {
                            opacity: 1,
                            x: 0
                        }, {
                            x: -200,
                            opacity: 0,
                            display: 'none',
                            duration: 1,
                        })

                        .fromTo(slideTitle3, {
                            display: '',
                            opacity: 0,
                            x: 200
                        }, {
                            x: 0,
                            opacity: 1,
                            duration: 1,
                        });

                    gsap.timeline()

                    .fromTo(separation2, {
                        }, {
                            display: 'none',
                            duration: 1,
                        })

                        .fromTo(separation3, {
                        }, {
                            display: '',
                            duration: 1,
                        });

                    gsap.timeline()
                        .fromTo(slideDescribe2, {
                            opacity: 1,
                        }, {
                            opacity: 0,
                            display: 'none',
                            duration: 1,
                        })


                        .fromTo(slideDescribe3, {
                            display: '',
                            opacity: 0,
                        }, {
                            opacity: 1,
                            duration: 1,
                        });
                    }

                    else if (slide3.style.display === '') {
                        gsap.timeline()
                        .fromTo(slide3, {
                            opacity: 1,
                        }, {
                            opacity: 0,
                            display: 'none',
                            duration: 0.5,
                        })

                        .fromTo(slide1, {
                            opacity: 0,
                        }, {
                            opacity: 1,
                            display: '',
                            duration: 1,
                        });

                    gsap.timeline()
                        .fromTo(slideTitle3, {
                            opacity: 1,
                            x: 0
                        }, {
                            x: -200,
                            opacity: 0,
                            display: 'none',
                            duration: 1,
                        })

                        .fromTo(slideTitle1, {
                            opacity: 0,
                            x: 200
                        }, {
                            x: 0,
                            opacity: 1,
                            display: '',
                            duration: 1,
                        });

                    gsap.timeline()

                        .fromTo(separation3, {
                        }, {
                            display: 'none',
                            duration: 1,
                        })

                        .fromTo(separation1, {
                        }, {
                            display: '',
                            duration: 1,
                        });

                    gsap.timeline()
                        .fromTo(slideDescribe3, {
                            opacity: 1,
                        }, {
                            opacity: 0,
                            display: 'none',
                            duration: 1,
                        })


                        .fromTo(slideDescribe1, {
                            opacity: 0,
                        }, {
                            opacity: 1,
                            display: '',
                            duration: 1,
                        });
                    }
                

                boutonLeft.addEventListener('click', () => {
                    if (slide1.style.display === '') {
                        gsap.timeline()
                        .add('test')
                        .fromTo(slide1, {
                            opacity: 1,
                        }, {
                            opacity: 0,
                            display: 'none',
                            duration: 0.5,
                        })

                        .fromTo(slide3, {
                            opacity: 0,
                        }, {
                            opacity: 1,
                            display: '',
                            duration: 1,
                        });

                    gsap.timeline()
                        .fromTo(slideTitle1, {
                            opacity: 1,
                            x: 0
                        }, {
                            x: 200,
                            opacity: 0,
                            display: 'none',
                            duration: 1,
                        })

                        .fromTo(slideTitle3, {
                            opacity: 0,
                            x: -200
                        }, {
                            x: 0,
                            opacity: 1,
                            display: '',
                            duration: 1,
                        });

                    gsap.timeline()

                        .fromTo(separation1, {
                        }, {
                            display: 'none',
                            duration: 1,
                        })

                        .fromTo(separation3, {
                        }, {
                            display: '',
                            duration: 1,
                        });

                    gsap.timeline()
                        .fromTo(slideDescribe1, {
                            opacity: 1,
                        }, {
                            opacity: 0,
                            display: 'none',
                            duration: 1,
                        })


                        .fromTo(slideDescribe3, {
                            opacity: 0,
                        }, {
                            opacity: 1,
                            display: '',
                            duration: 1,
                        });
                    }

                    else if (slide2.style.display === '') {
                        gsap.timeline()
                        .add('test')
                        .fromTo(slide2, {
                            opacity: 1,
                        }, {
                            opacity: 0,
                            display: 'none',
                            duration: 0.5,
                        })

                        .fromTo(slide1, {
                            opacity: 0,
                        }, {
                            opacity: 1,
                            display: '',
                            duration: 1,
                        });

                    gsap.timeline()
                        .fromTo(slideTitle2, {
                            opacity: 1,
                            x: 0
                        }, {
                            x: 200,
                            opacity: 0,
                            display: 'none',
                            duration: 1,
                        })

                        .fromTo(slideTitle1, {
                            opacity: 0,
                            x: -200
                        }, {
                            x: 0,
                            opacity: 1,
                            display: '',
                            duration: 1,
                        });

                    gsap.timeline()

                        .fromTo(separation2, {
                        }, {
                            display: 'none',
                            duration: 1,
                        })

                        .fromTo(separation1, {
                        }, {
                            display: '',
                            duration: 1,
                        });

                    gsap.timeline()
                        .fromTo(slideDescribe2, {
                            opacity: 1,
                        }, {
                            opacity: 0,
                            display: 'none',
                            duration: 1,
                        })


                        .fromTo(slideDescribe1, {
                            opacity: 0,
                        }, {
                            opacity: 1,
                            display: '',
                            duration: 1,
                        });
                    }

                    else if (slide3.style.display === '') {
                        gsap.timeline()
                        .add('test')
                        .fromTo(slide3, {
                            opacity: 1,
                        }, {
                            opacity: 0,
                            display: 'none',
                            duration: 0.5,
                        })

                        .fromTo(slide2, {
                            opacity: 0,
                        }, {
                            opacity: 1,
                            display: '',
                            duration: 1,
                        });

                    gsap.timeline()
                        .fromTo(slideTitle3, {
                            opacity: 1,
                            x: 0
                        }, {
                            x: 200,
                            opacity: 0,
                            display: 'none',
                            duration: 1,
                        })

                        .fromTo(slideTitle2, {
                            opacity: 0,
                            x: -200
                        }, {
                            x: 0,
                            opacity: 1,
                            display: '',
                            duration: 1,
                        });

                    gsap.timeline()

                        .fromTo(separation3, {
                        }, {
                            display: 'none',
                            duration: 1,
                        })

                        .fromTo(separation2, {
                        }, {
                            display: '',
                            duration: 1,
                        });

                    gsap.timeline()
                        .fromTo(slideDescribe3, {
                            opacity: 1,
                        }, {
                            opacity: 0,
                            display: 'none',
                            duration: 1,
                        })


                        .fromTo(slideDescribe2, {
                            opacity: 0,
                        }, {
                            opacity: 1,
                            display: '',
                            duration: 1,
                        });
                    }
                
            })

        },
    )}},

    mounted() {
        this.checkSlide();
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.main {
    width: 100%;
    height: 100vh;
    background-image: url('/assets/image2.jpeg');
    object-fit: cover;

}

.submain {
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    background: linear-gradient(to top, rgba(0, 0, 0, 100%), rgba(0, 0, 0, 60%), rgba(0, 0, 0, 100%));
    backdrop-filter: grayscale(100%);
}

.content {
    width: 80%;
    padding: 0;
    margin: 0;
    padding-top: 100px;
    padding-bottom: 1%;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.slider {
    flex: 1 1 auto;
    /* background-color: rgba(255, 255, 255, 20%); */
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    max-height: 100%;
}

.firstTitle {
    font-family: 'Crimson Pro', sans-serif;
    font-size: 40px;
}

.sliderWrapper {
    display: flex;
    gap: 3%;
    align-items: center;
    justify-content: center;
}

.imageGameMode {
    max-width: 600px;
    border-radius: 99px;
    /* border: solid 5px black; */
    box-shadow: 2px 2px 40px black;
}

.iimageGameMode {
    max-width: 600px;
    border-radius: 99px;
    /* border: solid white; */
    box-shadow: 2px 2px 40px black;
}

.separationPart1 {
    display: flex;
    justify-content: center;
    padding-bottom: 1%;
}

.separationPart2 {
    display: flex;
    justify-content: center;
    padding-bottom: 1%;
}

.separationPart3 {
    display: flex;
    justify-content: center;
    padding-bottom: 1%;
}

.titleContent1 {
    font-size: 40px;
    font-family: 'Crimson Pro', sans-serif;
    padding-top: 1%;
    padding-bottom: 1%;
}

.titleContent2 {
    font-size: 40px;
    font-family: 'Crimson Pro', sans-serif;
    padding-top: 1%;
    padding-bottom: 1%;
}

.titleContent3 {
    font-size: 40px;
    font-family: 'Crimson Pro', sans-serif;
    padding-top: 1%;
    padding-bottom: 1%;
}

.describeContent {
    text-align: center;
    display: flex;
    justify-content: center;
    font-family: 'Kanit', sans-serif;
    font-size: 15px;
    height: 100%;
    /* align-items: center; */


}

.descriibeContent1::-webkit-scrollbar {
    display: none;
}

.descriibeContent1 {
    width: 35%;
    max-height: 200px;
    overflow-y: scroll;
    scroll-behavior: smooth;
}

.descriibeContent2::-webkit-scrollbar {
    display: none;
}

.descriibeContent2 {
    width: 35%;
    max-height: 200px;
    overflow-y: scroll;
    scroll-behavior: smooth;
}

.descriibeContent3::-webkit-scrollbar {
    display: none;
}

.descriibeContent3 {
    width: 35%;
    max-height: 200px;
    overflow-y: scroll;
    scroll-behavior: smooth;
}
</style>