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
}
