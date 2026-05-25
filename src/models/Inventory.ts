import type { Fish } from "./Fish";

export class Inventory {
  constructor() {}

  // Add a fish
  addFish(fish: Fish, inventory: Fish[]): string {
    const existingFish = inventory.find((f) => f.name === fish.name);

    if (existingFish) {
      existingFish.quantity += fish.quantity;
    } else {
      inventory.push(fish);
    }
    return `You caught a ${fish.name}!`;
  }

  // List all fish
  getFish(inventory: Fish[]): string {
    const openingLine = "Your fish inventory:\n";
    const list = inventory
      .map((fish) => `${fish.name} x${fish.quantity}`)
      .join("\n");
    return openingLine + list;
  }

  // Calculate total value
  getTotalValue(inventory: Fish[]): number {
    let total = 0;
    for (const fish of inventory) {
      total += fish.value * fish.quantity;
    }
    return total;
  }

  // Clear inventory
  clear(inventory: Fish[]): void {
    inventory.length = 0;
  }

  // Check if inventory is empty
  isEmpty(inventory: Fish[]): boolean {
    if (inventory.length === 0) {
      return true;
    }
    return false;
  }
}
