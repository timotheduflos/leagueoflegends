<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="fixed w-full navbar">
    <Navbar />
  </div>
  <div class="body">
    <RouterView />
  </div>
</template>

<style scoped>
.navbar {
  z-index: 100;
}

.body{
  z-index: 0;
}

</style>
