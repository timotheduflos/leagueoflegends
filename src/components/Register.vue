<template>
    <div class="container">
        <div class="login">
            <div class="loginContainer">
                <form @submit.prevent="baguette">
                    <h1 class="title text-center">Register Now !</h1>
                    <div v-if="(password !== confirmPassword)">
                        <div class="text-center py-4 lg:px-4">
                            <div class="p-2 bg-red-800 items-center text-indigo-100 leading-none lg:rounded-xl flex lg:inline-flex"
                                role="alert">
                                <span
                                    class="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3">Alert</span>
                                <span class="font-semibold mr-2 text-left flex-auto">Passwords doesn't corresponded</span>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="username">
                        <h1 class="usernameH1">Username</h1>
                        <input type="text" class="inputUsername" v-model="username" required>
                    </div> -->
                    <div class="email">
                        <h1 class="emailH1">E-Mail</h1>
                        <input type="email" class="inputEmail" v-model="email" required>
                    </div>
                    <div class="password">
                        <h1 class="passwordH1">Password</h1>
                        <input type="password" class="inputPassword" v-model="password" required>
                    </div>
                    <div class="confirmPassword">
                        <h1 class="confirmPasswordH1">Confirm Password</h1>
                        <input type="password" class="inputConfirmPassword" v-model="confirmPassword" required>
                    </div>
                    <div class="notAccount">
                        <router-link to="/login">
                            <h1>Already registered ?</h1>
                        </router-link>
                    </div>
                    <div class="submit">
                        <button type="submit" class="submitButton">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const router = useRouter()

const baguette = () => {
    if (password.value == confirmPassword.value) {
        createUserWithEmailAndPassword(getAuth(), email.value, password.value)
            .then((data) => {
                console.log("C'est Good !")
                console.log(auth.currentUser)
                router.push('/')
            })
            .catch((error) => {
                console.log(error.code)
            });
    } else {
        console.log("c'est pas bon")
    }
}
</script>

<script>
import gsap from 'gsap'

export default {
    methods: {
        changeColor() {
            var email = document.querySelector('.emailH1')
            var password = document.querySelector('.passwordH1')
            var confirmPassword = document.querySelector('.confirmPasswordH1')

            var emailInput = document.querySelector('.inputEmail')
            var passwordInput = document.querySelector('.inputPassword')
            var confirmPasswordInput = document.querySelector('.inputConfirmPassword')

            emailInput.addEventListener('focusin', () => {
                gsap.timeline()
                    .to(email, {
                        color: '#e31523',
                    })
            })

            emailInput.addEventListener('focusout', () => {
                gsap.timeline()
                    .to(email, {
                        color: '#fff',
                    })
            })

            passwordInput.addEventListener('focusin', () => {
                gsap.timeline()
                    .to(password, {
                        color: '#e31523',
                    })
            })

            passwordInput.addEventListener('focusout', () => {
                gsap.timeline()
                    .to(password, {
                        color: '#fff',
                    })
            })

            confirmPasswordInput.addEventListener('focusin', () => {
                gsap.timeline()
                    .to(confirmPassword, {
                        color: '#e31523',
                    })
            })

            confirmPasswordInput.addEventListener('focusout', () => {
                gsap.timeline()
                    .to(confirmPassword, {
                        color: '#fff',
                    })
            })
        },
    },

    mounted() {
        this.changeColor();
    },
}
</script>

<style scoped>
.container {
    min-width: 100vw;
    height: 100vh;
    padding-top: 12em;
    color: white;
    display: flex;
    justify-content: center;
    background: url('/assets/LeagueofLegends1.svg');
    background-color: rgb(22, 22, 22);
    background-size: 100px;
}

.login {
    background-color: rgb(24, 24, 24);
    height: max-content;
    width: 40%;
    display: flex;
    justify-content: center;
    box-shadow: 10px 10px 40px black;
    border-radius: 15px;
}

.loginContainer {
    width: 80%;
}

.title {
    font-size: 50px;
    font-family: 'Crimson Pro', sans-serif;
    font-weight: 600;
    /* text-transform: uppercase; */
}

.username {
    padding-bottom: 2em;
}

.username h1 {
    font-size: 25px;
    font-family: 'Crimson Pro', sans-serif;
}

.password {
    padding-bottom: 2em;
}

.password h1 {
    font-size: 25px;
    font-family: 'Crimson Pro', sans-serif;
}

.username input {
    width: 100%;
    padding-left: 1em;
    padding-right: 1em;
    height: 35px;
    border-radius: 10px;
    font-family: 'Kanit', sans-serif;
    font-weight: 400;
    font-size: 20px;
    /* letter-spacing: 1px; */
    background-color: rgb(59, 59, 59);
}

.username input:focus {
    outline: none;
}

.password input:focus {
    outline: none;
}

.password input {
    width: 100%;
    padding-left: 1em;
    padding-right: 1em;
    height: 35px;
    border-radius: 10px;
    font-family: 'Kanit', sans-serif;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 2px;
    background-color: rgb(59, 59, 59);
}

.confirmPassword {
    padding-bottom: 1em;
}

.confirmPassword h1 {
    font-size: 25px;
    font-family: 'Crimson Pro', sans-serif;
}

.confirmPassword input {
    width: 100%;
    padding-left: 1em;
    padding-right: 1em;
    height: 35px;
    border-radius: 10px;
    font-family: 'Kanit', sans-serif;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 2px;
    background-color: rgb(59, 59, 59);
}

.confirmPassword input:focus {
    outline: none;
}

.email {
    padding-bottom: 2em;
}

.email h1 {
    font-size: 25px;
    font-family: 'Crimson Pro', sans-serif;
}

.email input {
    width: 100%;
    padding-left: 1em;
    padding-right: 1em;
    height: 35px;
    border-radius: 10px;
    font-family: 'Kanit', sans-serif;
    font-weight: 400;
    font-size: 20px;
    background-color: rgb(59, 59, 59);
}

.email input:focus {
    outline: none;
}

.submit {
    display: flex;
    justify-content: center;
    padding-bottom: 1.5em;
}

.submitButton {
    font-size: 25px;
    font-family: 'Crimson Pro', sans-serif;
    transition: 0.5s;
}

.submitButton:hover {
    background-color: rgb(190, 24, 24);
    padding-left: 2em;
    padding-right: 2em;
    border-radius: 10px;
    transition: 0.5s;
}

.notAccount {
    text-align: center;
    padding-bottom: 0.5em;
    width: 100%;
}

.notAccount h1 {
    transition: 0.5s;
    width: 100%;
}

.notAccount h1:hover {
    color: rgb(219, 21, 21);
    transition: 0.5s;
}
</style>