import type { Fish } from "./Fish";

export class Inventory {
  // Hashmap for storing the quantity of every fish in the users inventory
  // Key: fish name, value: quantity of value
  fishQuantity = new Map<string, number>();

  // Add a fish
  addFish(fish: Fish, inventory: Fish[]): string {
    const existingFish = inventory.find((f) => f.name === fish.name);

    if (!existingFish) {
      inventory.push(fish);
    }

    this.fishQuantity.set(
      fish.name,
      (this.fishQuantity.get(fish.name) ?? 0) + 1,
    );

    return `You caught a ${fish.name}!`;
  }

  // List all fish
  getFish(inventory: Fish[]): string {
    const openingLine = "Your fish inventory:\n";
    const list = inventory
      .map((fish) => `${fish.name} x${this.fishQuantity.get(fish.name) ?? 0}`)
      .join("\n");

    return openingLine + list;
  }

  // Calculate total value
  getTotalValue(inventory: Fish[]): number {
    let total = 0;
    for (const fish of inventory) {
      total += fish.value * (this.fishQuantity.get(fish.name) ?? 0);
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
