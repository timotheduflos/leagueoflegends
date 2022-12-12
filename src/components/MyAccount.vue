<template>
    <div class="container text-white">
        <div class="lol">
            <div class="title">
                Account Information
            </div>
            <div class="content">
                JAakaz
            </div>
        </div>
    </div>
</template>

<script setup>
    import { getAuth } from '@firebase/auth';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.container {
    padding-top: 9em;
}
.lol{
    background: linear-gradient(to top right,rgb(5, 5, 5), rgb(20, 20, 20));
    /* border: 4px solid; */
    border-color: rgb(76, 76, 76);
    color: white;
    width: 70%;
    height: 90%;
    border-radius: 20px; 
}

.content{
    font-family: 'Kanit', sans-serif;
    background: red;
}

.title{
    font-family: 'Kanit', sans-serif;
    text-align: center;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    font-size: 30px;
    background-color: #D13639;
    border-radius: 15px 15px 0 0;
}
</style>