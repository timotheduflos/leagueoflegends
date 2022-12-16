<template>
    <div class="container text-black">
        <div class="lol">
            <div class="title">
                Account Information
            </div>
            <div class="content">
                <div class="information">
                    <div class="input">
                        <div class="inputPart">
                            <h1 class="titleInformation">Username :</h1>
                            <input type="text" v-model="Username" :placeholder="`${getAuth().currentUser.displayName}`">
                        </div>
                        <div class="inputPart">
                            <h1 class="titleInformation">E-Mail :</h1>
                            <input type="email" v-model="Email" :placeholder="`${getAuth().currentUser.email}`">
                        </div>
                    </div>
                    <div class="info" v-if="changement">
                        <div class="text-center py-4 lg:px-4">
                            <div class="p-2 bg-green-800 items-center text-indigo-100 leading-none lg:rounded-xl flex lg:inline-flex"
                                role="alert">
                                <span
                                    class="flex rounded-full bg-green-500 uppercase px-2 py-1 text-xs font-bold mr-3">Info</span>
                                <span class="mr-2 text-center flex-auto font-normal">{{changement.value}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="button">
                        <div>
                            <button @click="updatePassword" class="resetButton w-full">Reset Password</button>
                        </div>
                        <div class="flex gap-4">
                            <button @click='updateProfil' class="modificateButton w-full">Up To Date</button>
                            <button @click="logOut" class="logOutButton w-full">Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { getAuth, signOut, updateProfile, sendPasswordResetEmail } from '@firebase/auth';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { ref } from 'vue'

const auth = getAuth().currentUser;
const router = useRouter();

const Username = ref('')
const Email = ref('')
var changement = ref(false)
// var newPassword = getASecureRandomPassword();
const Password = ref('')

const logOut = () => {
    signOut(getAuth())
        .then(() => {
            router.push('/')
        })
        .catch((error) => {
            console.log(error)
        });
}

const updateProfil = () => {
        updateProfile(auth, {
            displayName: Username.value, email: Email.value,
        }).then(() => {
            changement.value = ref('Account informations have been changed !')
            console.log('eyooh')
            console.log('profile mit jour')
        }).catch((error) => {
            changement.value = ref(false)
            console.log('profile pas mit à jour')
        });
}

const updatePassword = () => {
    sendPasswordResetEmail(getAuth(), auth.email)
    .then(()=>{
        console.log('email envoyé')
    })
    .catch((error)=>{
        console.log('email pas envoyé')
    })
}

</script>

<script>
import { getAuth } from '@firebase/auth';

export default {
    methods: {
    },
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.container {
    padding-top: 9em;
}

.lol {
    background: linear-gradient(to top, rgb(27, 27, 27), rgb(18, 18, 18));
    /* border: 4px solid; */
    border-color: rgb(76, 76, 76);
    color: white;
    width: 70%;
    height: 90%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
}

.lool {}

.content {
    font-family: 'Kanit', sans-serif;
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex: 0 1 auto;
}

.title {
    font-family: 'Kanit', sans-serif;
    text-align: center;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    font-size: 30px;
    background-color: #D13639;
    border-radius: 15px 15px 0 0;
}

.titleInformation {
    font-size: 30px;
    text-align: center;
}

.information {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.information div {
    place-self: center;
    /* flex: 1 0 auto; */
    width: 80%;
}

.information div input {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    padding-left: 1em;
    padding-right: 1em;
    font-size: 20px;
    outline: none;
    color: black;
}

.information div h1 {
    padding-bottom: 0.5em;
    font-weight: 500;
}

.inputPart{
    padding-top: 1.5em;
}

.information div input::placeholder {
    color: black;
}

.modificateButton {
    background-color: #D13639;
    padding-left: 2em;
    padding-right: 2em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    border-radius: 10px;
    color: white;
    font-size: 18px;
    transition: 0.5s;
}

.modificateButton:hover {
    background-color: rgb(255, 255, 255);
    color: black;
    transition: 0.5s;
}

.resetButton {
    background-color: #D13639;
    padding-left: 2em;
    padding-right: 2em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    border-radius: 10px;
    color: white;
    font-size: 18px;
    transition: 0.5s;
}

.resetButton:hover {
    background-color: rgb(255, 255, 255);
    color: black;
    transition: 0.5s;
}

.logOutButton {
    background-color: #D13639;
    padding-left: 2em;
    padding-right: 2em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    border-radius: 10px;
    color: white;
    font-size: 18px;
    transition: 0.5s;
}

.logOutButton:hover {
    background-color: rgb(255, 255, 255);
    color: black;
    transition: 0.5s;
}

.input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 1em;
    height: 100%;
}

.button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
}

.button div {
    padding-bottom: 1em;
}

.info{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>