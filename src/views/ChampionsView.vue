<script setup>
import ListChampions from '../components/ListChampions.vue';
</script>

<template>
  <div class="about text-4xl">
    <ListChampions />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    padding-top: 100px;
    padding-bottom: 20px;
    background: linear-gradient(to bottom, rgb(10, 10, 10), rgb(20, 20, 20));
    min-height: 100vh;
  }
}
</style>
