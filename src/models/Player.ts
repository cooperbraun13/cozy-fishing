import type { FishingRod } from "./FishingRod";
import type { Inventory } from "./Inventory";

export class Player {
  coins: number;
  rod: FishingRod;
  inventory: Inventory;

  constructor(coins: number, rod: FishingRod, inventory: Inventory) {
    this.coins = coins;
    this.rod = rod;
    this.inventory = inventory;
  }

  // Track coins and return a string
  getCoinsText(): string {
    return `Your current balance: ${this.coins}`;
  }

  // Get coins as a number
  getCoins(): number {
    return this.coins;
  }

  // Track current fishing rod
  getRod(): string {
    return `Your equipped rod: ${this.rod.name}`;
  }

  // Receive coins
  addCoins(amount: number): number {
    if (amount <= 0) {
      throw Error("Amount must be positive.");
    }

    this.coins += amount;
    return this.coins;
  }

  // Spend coins
  spendCoins(amount: number): number {
    if (amount <= 0) {
      throw Error("Amount must be positive.");
    }

    if (this.coins < amount) {
      throw Error("Can't spend more than what you have...");
    }

    this.coins -= amount;
    return this.coins;
  }

  // Upgrade rod
  upgradeRod(newRod: FishingRod): string {
    this.rod = newRod;
    return `Congrats! Your new rod: ${newRod.name}`;
  }
}
