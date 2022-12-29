import Hand from "./Hand";

export default class Player {
  // todo: multiple hands per player
  private hand: Hand;
  private action: boolean;
  private currenAction: boolean;
  private money: number;

  constructor() {
    this.hand = new Hand();
    this.action = false;
    this.money = 100;
    this.currenAction = false;
  }

  // setters
  addCard(card: { suit: string; value: string }) {
    this.hand.addCard(card);
  }

  reset() {
    this.hand.reset();
    this.action = false;
  }

  setAction(action: boolean) {
    this.action = action;
  }

  setCurrentAction(action: boolean) {
    this.currenAction = action;
  }

  // getters
  getHand() {
    return this.hand;
  }

  getHandTotal() {
    return this.hand.calculateTotal();
  }

  getAction() {
    return this.action;
  }

  getCurrentAction() {
    return this.currenAction;
  }
}
