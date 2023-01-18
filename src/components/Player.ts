import Hand from "./Hand";

export default class Player {
  private playerID: number;
  private money: number;
  private hands: Array<Hand> = [];

  constructor(playerID: number, money: number) {
    this.playerID = playerID;
    this.money = 100;
  }

  // setters
  newHand(betAmount: number) {
    this.hands.push(new Hand(this.playerID, betAmount));
  }

  reset() {
    this.hands.forEach((hand: Hand) => {
      hand.reset();
    });
  }

  bet(hand: Hand, amount: number) {
    this.money -= hand.changeBet(amount);
  }

  // todo: hand actions
  // hit, stand, double, split

  // getters
  getHands() {
    return this.hands;
  }

  getMoney() {
    return this.money;
  }
}
