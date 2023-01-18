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
      <div>{{ store.dealerHand.handDesc() }}</div>
      <div class="">Dealer</div>
    </div>

    <div class="py-10"></div>

    <!-- display player's cards -->
    <div class="flex flex-row">
      <div
        v-for="(hand, index) in store.playerHands"
        :key="index"
        class="flex flex-col items-center px-2"
      >
        <div class="flex flex-row">
          <div v-for="card in hand.getCards()">
            <Card :suit="card.suit" :value="card.value" />
          </div>
        </div>
        <div class="total">{{ hand.handDesc() }}</div>
        <div>Hand {{ index + 1 }}</div>
        <div>Bet {{ hand.getBetAmount() }}</div>
        <div>Player {{ hand.getPlayerID() }}</div>
      </div>
    </div>

    <div class="py-4"></div>

    <!-- display buttons -->
    <div class="flex flex-row justify-center">
      <!-- display buttons for hit, stand, and restart -->
      <Button
        action="hit"
        v-on:click="buttonClick('hit')"
        :is-enabled="isPlayerTurn && store.playerHands[0].canHit()"
        :is-highlighted="store.showBasicStrategy"
      />
      <Button
        action="stand"
        v-on:click="buttonClick('stand')"
        :is-enabled="isPlayerTurn && store.playerHands[0].canStand()"
        :is-highlighted="store.showBasicStrategy"
      />
      <Button
        action="split"
        v-on:click="buttonClick('split')"
        :is-enabled="isPlayerTurn && store.playerHands[0].canSplit()"
        :is-highlighted="store.showBasicStrategy"
      />
      <Button
        action="double"
        v-on:click="buttonClick('double')"
        :is-enabled="isPlayerTurn && store.playerHands[0].canDouble()"
        :is-highlighted="store.showBasicStrategy"
      />
    </div>

    <div class="py-4">Current seed: {{ store.shoe.getSeed() }}</div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, toRefs, watch } from "vue";
import Card from "../components/Card.vue";
import Blackjack from "../components/Blackjack";
import Button from "../components/Button.vue";

// create a new shoe with 6 decks and seed of 123
const blackjack = new Blackjack();
blackjack.startNewRound();
const isPlayerTurn = ref(true);
type playerAction = "hit" | "stand" | "split" | "double";
const playerAction = ref("");

const store = reactive({
  blackjack: blackjack,
  dealer: blackjack.getDealer(),
  dealerHand: blackjack.getDealerHand(),
  players: blackjack.getPlayers(),
  playerHands: blackjack.getPlayerHands(),
  shoe: blackjack.getShoe(),
  currentHand: blackjack.getCurrentHand(),
  showBasicStrategy: false,
});

const { dealer, dealerHand, players, playerHands, shoe, showBasicStrategy } =
  toRefs(store);

watch(playerAction, (newVal: string, oldVal: string) => {
  if (newVal === "hit") {
    store.blackjack.hit(store.currentHand);
  } else if (newVal === "stand") {
    store.blackjack.stand(store.currentHand);
  } else if (newVal === "split") {
    store.blackjack.split(store.currentHand);
  } else if (newVal === "double") {
    store.blackjack.double(store.currentHand);
  }
  playerAction.value = "";
});

// Button
const startNewRound = () => {
  store.blackjack.startNewRound();
  // store.dealer = store.blackjack.getDealer();
  // store.dealerHand = store.blackjack.getDealerHand();
  // store.players = store.blackjack.getPlayers();
  // store.playerHands = store.blackjack.getPlayerHands();
  // store.shoe = store.blackjack.getShoe();
};

const buttonClick = (action: string) => {
  if (action === "hit") {
    playerAction.value = "hit";
  } else if (action === "stand") {
    playerAction.value = "stand";
  } else if (action === "split") {
    playerAction.value = "split";
  } else if (action === "double") {
    playerAction.value = "double";
  }
};

// game start
// startNewRound();
</script>

<style scoped></style>
