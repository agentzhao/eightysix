<template>
  <div class="w-screen h-screen bg-background">
    <Background />
    <div class="grid content-center h-screen">
      <h1 class="flex justify-center text-2xl text-white py-3">
        Watch this space
      </h1>
      <div class="flex flex-row justify-center">
        <img
          class="h-64"
          src="./assets/svg_playing_cards/fronts/spades_8.svg"
        />
        <img
          class="h-64"
          src="./assets/svg_playing_cards/fronts/hearts_6.svg"
        />
      </div>
    </div>
    <!-- Sidebar -->
    <!-- <RouterView /> -->

    <!-- <Game /> -->
  </div>
</template>

<script setup lang="ts">
import Background from "./components/Background.vue";
// import { RouterLink, RouterView } from "vue-router";
// import Game from "@/views/Game";
// import Burger from "@/components/sidebar/Burger.vue";
// import Sidebar from "./components/Sidebar.vue";
// import TheMenuButton from "@/components/TheMenuButton";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400&family=Open+Sans:wght@300;400;500;700&display=swap");

* {
  box-sizing: border-box;
  font-family: "Monsterrat", sans-serif;
}
</style>
