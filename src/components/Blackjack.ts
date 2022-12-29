import Shoe from "./Shoe";
import Player from "./Player";

export default class Blackjack {
  private gameOver: boolean;
  private roundOver: boolean;
  private shoe: Shoe;
  private numPlayers: number = 1;
  // array of Hands for players
  private players: Array<Player> = [];
  private dealer: Player;

  constructor() {
    for (let i = 0; i < this.numPlayers; i++) {
      this.players.push(new Player());
    }
    this.dealer = new Player();
    this.shoe = new Shoe(6, 123);
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

    // check if deck is over
    if (this.shoe.getDeckOver()) {
      this.gameOver = true;
      return;
    }

    // todo: place bets before dealing cards

    // deal 2 cards to players and dealer
    for (let i = 0; i < 2; i++) {
      this.players.forEach((player) => {
        player.addCard(this.shoe.dealCard());
      });
      this.dealer.addCard(this.shoe.dealCard());
    }

    // check for Blackjack
    this.players.forEach((player) => {
      if (player.getHand().isBlackjack()) {
        player.setAction(true);
      }
    });
  }

  // player actions
  hit(player: Player) {
    // add a new card to the player's hand
    player.addCard(this.shoe.dealCard());
    if (player.getHand().isBust()) {
      this.stand(player);
    }
  }
  stand(player: Player) {
    // reveal the dealer's cards and determine the winner
    player.setAction(true);
  }
  double(player: Player) {
    // double the player's bet and add a new card to the player's hand
  }
  split(player: Player) {
    // split the player's hand into two hands
  }

  // getters
  getShoeSeed() {
    return this.shoe.getSeed();
  }

  getPlayers() {
    return this.players;
  }

  getDealer() {
    return this.dealer;
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
}
