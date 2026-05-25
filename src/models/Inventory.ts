import type { Fish } from "./Fish";

export class Inventory {
  // Hashmap for storing the quantity of every fish in the users inventory
  // Key: fish name, value: Fish object and the quantity of that fish
  fishByName = new Map<string, { fish: Fish; quantity: number }>();

  // Add a fish
  addFish(fish: Fish): string {
    const existingFish = this.fishByName.get(fish.name);

    if (existingFish) {
      existingFish.quantity += 1;
    } else {
      this.fishByName.set(fish.name, { fish, quantity: 1 });
    }

    return `You caught a ${fish.name}!`;
  }

  // List all fish
  getFish(): string {
    const list = Array.from(this.fishByName.values())
      .map(({ fish, quantity }) => `${fish.name} x${quantity}`)
      .join("\n");

    return `Your fish inventory:\n${list}`;
  }

  // Calculate total value
  getTotalValue(): number {
    let total = 0;

    for (const { fish, quantity } of this.fishByName.values()) {
      total += fish.value * quantity;
    }

    return total;
  }

  // Clear inventory
  clear(): void {
    this.fishByName.clear();
  }

  // Check if inventory is empty
  isEmpty(): boolean {
    return this.fishByName.size === 0;
  }
}
