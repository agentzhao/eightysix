<template>
  <div class="grid content-center h-screen">
    <h1 class="flex justify-center text-2xl text-white py-3">
      Watch this space
    </h1>
    <div class="flex flex-row justify-center">
      <Card suit="spades" value="8" />
      <Card suit="hearts" value="6" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from "../components/Card.vue";
</script>

<style scoped></style>
