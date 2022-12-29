<template>
  <div class="flex flex-col items-center">
    <!-- display cards in the shoe -->
    <!-- <div v-for="card in shoe.cards" :key="card.id" class="flex"> -->
    <!--   <Card class="h-8" :suit="card.suit" :value="card.value" /> -->
    <!-- </div> -->

    <div class="py-4"></div>
    <!-- display dealer's cards -->
    <div class="flex flex-col items-center">
      <div class="flex flex-row">
        <div v-for="card in store.dealerHand.getCards()">
          <Card :suit="card.suit" :value="card.value" />
        </div>
      </div>
      <div>
        Total: {{ store.dealerHand.hardorsoft() }}
        {{ store.dealerHand.getTotal() }}
      </div>
      <div class="">Dealer</div>
    </div>

    <div class="py-10"></div>

    <!-- display player's cards -->
    <div class="flex flex-row">
      <div
        v-for="(player, index) in store.playerHands"
        :key="index"
        class="flex flex-col items-center px-2"
      >
        <div class="flex flex-row">
          <div v-for="card in player.getCards()">
            <Card :suit="card.suit" :value="card.value" />
          </div>
        </div>
        <div class="total">
          Total: {{ player.hardorsoft() }} {{ player.getTotal() }}
        </div>
        <div class="">Player {{ index + 1 }}</div>
      </div>
    </div>

    <!-- display buttons -->
    <div class="flex flex-row justify-center">
      <!-- display buttons for hit, stand, and restart -->
      <Button action="doubleDown" :is-enabled="isPlayerTurn" />
      <Button action="split" :is-enabled="isPlayerTurn" />
      <Button action="stand" :is-enabled="isPlayerTurn" />
      <Button action="hit" :is-enabled="isPlayerTurn" />
      <!-- <button v-if="!gameOver" @click="hit">Hit</button> -->
      <!-- <button v-if="!gameOver" @click="stand">Stand</button> -->
      <!-- <button v-if="!gameOver" @click="double">Double</button> -->
      <!-- <button v-if="!gameOver" @click="split">Split</button> -->
    </div>

    <div class="py-4">Current seed: {{ store.shoe.getSeed() }}</div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, toRefs } from "vue";
import Card from "../components/Card.vue";
import Blackjack from "../components/Blackjack";
import Button from "../components/Button.vue";

// create a new shoe with 6 decks and seed of 123
const blackjack = new Blackjack();
const isPlayerTurn = ref(true);

const store = reactive({
  blackjack: blackjack,
  dealer: null,
  dealerHand: null,
  players: [],
  playerHands: [],
  shoe: null,
});

const { dealer, dealerHand, players, playerHands, shoe } = toRefs(store);

const setDealer = (dealer: any) => {
  store.dealer = dealer;
  store.dealerHand = dealer.getHand();
};

const setPlayers = (players: any[]) => {
  store.players = players;
  store.playerHands = players.map((player) => player.getHand());
};

const setShoe = (shoe: any) => {
  store.shoe = shoe;
};

const startNewRound = () => {
  store.blackjack.startNewRound();
  setDealer(store.blackjack.getDealer());
  setPlayers(store.blackjack.getPlayers());
  setShoe(store.blackjack.getShoe());
};

// game start
startNewRound();
</script>

<style scoped></style>
