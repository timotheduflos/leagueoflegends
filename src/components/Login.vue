<template>
        <div class="login">
            <div class="loginContainer">
                <form action="#" @submit.prevent="baguette">
                    <h1 class="title text-center">Welcome Back !</h1>
                    <div class="username">
                        <h1 class="usernameH1">E-Mail</h1>
                        <input type="email" class="inputUsername" name="email" v-model="email" value required>
                    </div>
                    <div class="password">
                        <h1 class="passwordH1">Password</h1>
                        <input type="password" class="inputPassword" name="password" required v-model="password">
                    </div>
                    <div v-if="errorMsg">
                        <div class="text-center py-4 lg:px-4">
                            <div class="p-2 bg-red-800 items-center text-indigo-100 leading-none lg:rounded-xl flex lg:inline-flex"
                                role="alert">
                                <span
                                    class="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3">Alert</span>
                                <span class="font-semibold mr-2 text-left flex-auto">{{errorMsg}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="notAccount">
                        <router-link to="/register">
                            <h1>You don't have account ?</h1>
                        </router-link>
                    </div>
                    <div class="submit">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const errorMsg = ref(null)

const router = useRouter()

const baguette = () => {
        signInWithEmailAndPassword(getAuth(), email.value, password.value)
            .then((data) => {
                console.log("Connecté !")
                console.log(getAuth().currentUser)
                router.push('/')
            })
            .catch((error) => {
                console.log(error.code)
                switch (error.code) {
                    case "auth/invalid-email":
                        errorMsg.value = "Invalid email or password"
                        break;
                    case "auth/user-not-found":
                        errorMsg.value = "Invalid email or password"
                        break;
                    case "auth/wrong-password":
                        errorMsg.value = "Invalid email or password"
                        break;
                    default:
                        errorMsg.value = "Invalid email or password"
                        break;
                }
            });
    }
</script>

<script>
import gsap from 'gsap';
export default {
    methods: {
        changeColor() {
            var username = document.querySelector('.usernameH1')
            var password = document.querySelector('.passwordH1')
            var usernameInput = document.querySelector('.inputUsername')
            var passwordInput = document.querySelector('.inputPassword')

            usernameInput.addEventListener('focusin', () => {
                gsap.timeline()
                    .to(username, {
                        color: '#e31523',
                    })
            })

            usernameInput.addEventListener('focusout', () => {
                gsap.timeline()
                    .to(username, {
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
        },
    },

    mounted() {
        this.changeColor();
    }
}
</script>

<style scoped>
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
    padding-bottom: 1em;
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

.submit {
    display: flex;
    justify-content: center;
    padding-bottom: 1em;
}

.submit button {
    font-size: 25px;
    font-family: 'Crimson Pro', sans-serif;
    transition: 0.5s;
}

.submit button:hover {
    background-color: rgb(190, 24, 24);
    padding-left: 2em;
    padding-right: 2em;
    border-radius: 10px;
    transition: 0.5s;
}

.notAccount {
    text-align: center;
    padding-bottom: 0.5em;
}

.notAccount h1 {
    transition: 0.5s;
}

.notAccount h1:hover {
    color: rgb(219, 21, 21);
    transition: 0.5s;
}
</style>