<template>
  <div class="w-screen h-screen bg-background">
    <Background />
    <!-- Sidebar -->
    <!-- <RouterView /> -->
    <Game />
    <!-- <Home /> -->
  </div>
</template>

<script setup lang="ts">
import Background from "./components/Background.vue";
import { RouterLink, RouterView } from "vue-router";
import Game from "./views/Game.vue";
import Home from "./views/Home.vue";
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
