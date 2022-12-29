import * as seedrandom from "seedrandom";

export default class Shoe {
  private cards: Array<{ suit: string; value: string }> = [];
  private currentIndex = 0;
  private decks: number;
  private seed: number;
  private cutoff: number;
  private deckOver: boolean = false;

  constructor(decks: number, seed: number) {
    // generate the initial set of cards in the shoe
    this.decks = decks;
    if (seed === 0) {
      this.seed = Math.floor(Math.random() * 1000000000);
    } else {
      this.seed = seed;
    }
    this.cutoff = Math.floor(this.decks * 52 * 0.75);
    this.generateCards();
  }

  private generateCards() {
    // clear the current set of cards
    this.cards = [];

    // generate a new set of cards
    const values = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "jack",
      "queen",
      "king",
      "ace",
    ];
    const suits = ["hearts", "diamonds", "clubs", "spades"];
    for (let i = 0; i < this.decks; i++) {
      for (const suit of suits) {
        for (const value of values) {
          this.cards.push({
            suit,
            value,
          });
        }
      }
    }

    // shuffle the cards
    this.shuffle();
  }

  shuffle() {
    // implement the Fisher-Yates shuffle
    let currentIndex = this.cards.length;
    let temporaryValue;
    let randomIndex;

    // initialize the random number generator with the seed value
    seedrandom(this.seed, { global: true });

    // while there remain elements to shuffle...
    while (currentIndex !== 0) {
      // pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // and swap it with the current element
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
  }

  dealCard(): { suit: string; value: string } {
    // return the next card in the shoe, or undefined if the shoe is empty
    if (this.currentIndex === this.cutoff) {
      this.deckOver = true;
    }

    return this.cards[this.currentIndex++];
  }

  // getters
  getSeed() {
    return this.seed;
  }

  getDecks() {
    return this.decks;
  }

  getDeckOver() {
    return this.deckOver;
  }
}
