export default class Hand {
  private cards: Array<{ suit: string; value: string }> = [];
  private total: number = 0;
  private bust: boolean = false;
  private blackjack: boolean = false;
  private soft: boolean = false;

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

  splittable() {
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

  hardorsoft() {
    if (this.soft) {
      return "soft";
    }
    return "hard";
  }

  getCards() {
    return this.cards;
  }
}
