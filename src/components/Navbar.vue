<template>
    <div class="navbar py-2 px-8 bg-black grid grid-cols-5 text-white">
        <div class="place-self-center w-full">
            <img src="@/assets/riot-games-seeklogo.com.svg" alt="logo riot" class="logoRiot">
        </div>
        <div class="place-self-center">
            <button class="" id="button">Discover</button>
        </div>
        <div class="">
            <router-link to="/"><img src="@/assets/lol.png" alt="" class="logoLol"></router-link>
        </div>
        <div class="place-self-center">
            <router-link to="/champions"><button id="button">Champions</button></router-link>
        </div>
        <div class="flex justify-end w-full items-center">
            <button class="accountButton flex items-center" id="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>Account
            </button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.navbar {
    height: 60px;
    font-family: 'Kanit', sans-serif;
    font-size: 20px;
    font-weight: 500;
}

.logoRiot {
    width: 100px;
}

.logoLol {
    width: 250px;
    position: absolute;
    margin-top: -10px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
}

.accountButton {
    display: flex;
    justify-items: end;
}

button {
    position: relative;
}

button:after {
    content: '';
    position: absolute;
    background-color: #D22A36;
    height: 3px;
    width: 0%;
    left: 0;
    bottom: -1px;
    transition: 0.5s;
    color: #D22A36;
}

button:hover:after {
    content: '';
    position: absolute;
    background-color: #D22A36;
    height: 3px;
    width: 100%;
    left: 0;
    bottom: -1px;
    color: #D22A36;
}

button:focus:after {
    content: '';
    position: absolute;
    background-color: #D22A36;
    height: 3px;
    width: 100%;
    left: 0;
    bottom: -1px;
    color: #D22A36;
}
</style>
