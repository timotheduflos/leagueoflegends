<script setup>
import LoginVue from '../components/Login.vue';
</script>

<template>
    <div class="container">
        <LoginVue />
    </div>
</template>

<style scoped> 
.container{
    padding-top: 12em;
    background: url('/assets/LeagueofLegends.svg');
    background-color: rgb(22, 22, 22);
    background-size: 100px;
    color: white;
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
}
</style>