import Shoe from "./Shoe";
import Player from "./Player";
import Hand from "./Hand";

export default class Blackjack {
  private gameOver: boolean;
  private roundOver: boolean;
  private shoe: Shoe;
  private numPlayers: number = 1;
  private defaultMoney: number = 100;
  // array of Hands for players
  private players: Array<Player> = [];
  private playerHands: Hand[] = [];
  private dealer: Player;
  private currentHand: Hand;

  constructor() {
    for (let i = 0; i < this.numPlayers; i++) {
      this.players.push(new Player(i + 1, this.defaultMoney));
    }

    this.dealer = new Player(999, 0);
    this.shoe = new Shoe(6, "0");
    this.gameOver = false;
    this.roundOver = false;
  }

  startNewRound() {
    // reset game state
    this.gameOver = false;
    this.roundOver = false;
    this.players.forEach((player) => {
      player.reset();
    });
    this.dealer.reset();
    this.playerHands = [];

    // check if deck is over
    if (this.shoe.getDeckOver()) {
      this.gameOver = true;
      return;
    }

    // todo: place bets before dealing cards

    // dealer hand
    this.dealer.newHand(0);

    // initialize player hands depending on bets
    this.players.forEach((player) => {
      player.newHand(10);

      // add to playerHands array
      player.getHands().forEach((hand) => {
        this.playerHands.push(hand);
      });
    });

    // deal 2 cards to players and dealer
    for (let i = 0; i < 2; i++) {
      this.playerHands.forEach((hand) => {
        // hand.addCard(this.shoe.dealCard());
        (hand as Hand).addCard(this.shoe.dealCard());
      });
      this.dealer.getHands()[0].addCard(this.shoe.dealCard());
    }

    // check for Blackjack
    this.players.forEach((player) => {
      player.getHands().forEach((hand) => {
        if (hand.isBlackjack()) {
          // todo: pay out
        }
      });
    });

    this.currentHand = this.playerHands[0];
  }

  doAction(action: string) {
    switch (action) {
      case "hit":
        this.hit(this.currentHand);
        break;
      case "stand":
        this.stand(this.currentHand);
        break;
      case "double":
        this.double(this.currentHand);
        break;
      case "split":
        this.split(this.currentHand);
        break;
    }
  }

  // player actions
  hit(hand: Hand) {
    // add a new card to the player's hand
    console.log("hit");
    hand.hit(this.shoe.dealCard());
  }
  stand(hand: Hand) {
    // reveal the dealer's cards and determine the winner
    console.log("stand");
    hand.stand();
  }
  double(hand: Hand) {
    // double the player's bet, hit and stand
    console.log("double");
    hand.double(this.shoe.dealCard());
  }
  split(hand: Hand) {
    // split the player's hand into two hands
    console.log("split");
    const newHand = new Hand(hand.getPlayerID(), hand.getBetAmount());
    const card = hand.split();
    if (card) {
      newHand.addCard(card);
    }

    hand.addCard(this.shoe.dealCard());
    newHand.addCard(this.shoe.dealCard());
    this.playerHands.push(newHand);
  }

  // getters
  getShoeSeed() {
    return this.shoe.getSeed();
  }

  getPlayers() {
    return this.players;
  }

  getPlayerHands() {
    return this.playerHands;
  }

  getDealer() {
    return this.dealer;
  }

  getDealerHand() {
    return this.dealer.getHands()[0];
  }

  getGameOver() {
    return this.gameOver;
  }

  getNumPlayers() {
    return this.numPlayers;
  }

  getShoe() {
    return this.shoe;
  }

  getCurrentHand() {}

  getLastHand() {
    return this.playerHands[this.playerHands.length - 1];
  }
}
