<template>
  <div>
    <img class="h-32" :src="imagePath" :alt="altText" />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  suit: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

const imagePath: string = `../src/assets/cards/${props.suit}_${props.value}.svg`;
const altText: string = `${props.value} of ${props.suit}`;
</script>

<style scoped>
/* .card { */
/*   display: inline-block; */
/*   width: 50px; */
/*   height: 70px; */
/* } */
/**/
/* img { */
/*   width: 100%; */
/*   height: 100%; */
/* } */
</style>
