export default class Hand {
  private cards: Array<{ suit: string; value: string }> = [];
  private total: number = 0;
  private bust: boolean = false;
  private blackjack: boolean = false;
  private soft: boolean = false;
  private playerID: number;
  private betAmount: number = 0;
  private completed: boolean;

  constructor(playerID: number, betAmount: number) {
    this.playerID = playerID;
    this.betAmount = betAmount;
    this.completed = false;
  }

  calculateTotal() {
    let total = 0;
    let aces = 0;

    this.cards.forEach((card) => {
      if (card.value === "ace") {
        aces++;
      } else if (["jack", "queen", "king"].includes(card.value)) {
        total += 10;
      } else {
        total += parseInt(card.value);
      }
    });

    // check for soft hands
    if (aces) {
      if (total + 11 + aces - 1 <= 21) {
        this.soft = true;
      }
    }

    for (let i = 0; i < aces; i++) {
      if (total + 11 > 21) {
        total += 1;
      } else {
        total += 11;
      }
    }

    this.total = total;
    this.bust = total > 21;
    this.blackjack = total === 21 && this.cards.length === 2;
  }

  reset() {
    this.cards = [];
    this.total = 0;
    this.bust = false;
    this.blackjack = false;
    this.soft = false;
  }

  addCard(card: { suit: string; value: string }) {
    this.cards.push(card);
    this.calculateTotal();
  }

  changeBet(amount: number) {
    let temp = amount - this.betAmount;
    this.betAmount = amount;
    return temp;
  }

  // player actions
  hit(card: { suit: string; value: string }) {
    this.addCard(card);
    if (this.isBust()) {
      this.stand();
    }
  }

  stand() {
    this.completed = true;
  }

  double(card: { suit: string; value: string }) {
    this.betAmount *= 2;
    this.addCard(card);
    this.stand();
  }

  split() {
    //todo: this one is tricky
    return this.cards.pop();
  }

  // getters
  isCompleted() {
    return this.completed;
  }

  canHit() {
    if (this.bust || this.blackjack) {
      return false;
    }
    return true;
  }

  canStand() {
    if (this.bust || this.blackjack) {
      return false;
    }
    return true;
  }

  canSplit() {
    if (this.cards.length === 2) {
      if (this.cards[0].value === this.cards[1].value) {
        return true;
      }
      // two cards can be either 10, jack, queen, king
      if (["10", "jack", "queen", "king"].includes(this.cards[0].value)) {
        if (["10", "jack", "queen", "king"].includes(this.cards[1].value)) {
          return true;
        }
      }
    }
    return false;
  }

  canDouble() {
    if (this.cards.length === 2 && !this.blackjack) {
      return true;
    } else {
      return false;
    }
  }

  // getters
  isBust() {
    return this.bust;
  }

  isBlackjack() {
    return this.blackjack;
  }

  isSoft() {
    return this.soft;
  }

  getTotal() {
    return this.total;
  }

  handDesc() {
    if (this.isBlackjack()) {
      return "blackjack";
    } else if (this.soft) {
      return "soft " + this.getTotal();
    } else {
      return "hard " + this.getTotal();
    }
  }

  getCards() {
    return this.cards;
  }

  getPlayerID() {
    return this.playerID;
  }

  getBetAmount() {
    return this.betAmount;
  }
}
