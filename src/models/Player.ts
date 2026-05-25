import type { FishingRod } from "./FishingRod";
import type { Inventory } from "./Inventory";

class Player {
  coins: number;
  rod: FishingRod;
  inventory: Inventory;

  constructor(coins: number, rod: FishingRod, inventory: Inventory) {
    this.coins = coins;
    this.rod = rod;
    this.inventory = inventory;
  }

  // Track coins
  getCoins(coins: number): string {
    return `Your current balance: ${coins}`;
  }

  // Track current fishing rod
  getRod(rod: FishingRod): string {
    return `Your equipped rod: ${rod}`;
  }

  // Receive coins
  addCoins(amount: number): number {
    return (this.coins += amount);
  }

  // Spend coins
  spendCoins(amount: number): number {
    return (this.coins -= amount);
  }

  // Upgrade rod
  upgradeRod(newRod: FishingRod): string {
    return `Congrats! Your new rod: ${newRod}`;
  }
}
