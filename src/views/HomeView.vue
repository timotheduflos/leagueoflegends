<script setup>
import ClassDescribe from "../components/ClassDescribe.vue";
import ModeGameDescribe from "../components/ModeGameDescribe.vue";

import VideoBackground from "../components/VideoBackground.vue";
</script>

<template>
  <main>
    <div class="video">
      <VideoBackground />
    </div>
    <div class="restHome">
      <ClassDescribe />
    </div>
    <div class="zelazl">
      <ModeGameDescribe />
    </div>
    <!-- <div class="eaeaa">
      <Test />
    </div> -->
  </main>
</template>

<style>
.video{
  z-index: 0;
  overflow: hidden;
}

.restHome {
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: black;
}

.zelazl {
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: white;
}

/* .eaeaa{
  z-index: 0;
  width: 100vw;
  height: 100vh;
  background-color: red;
} */
</style>