import type { FishRarity } from "../enums/FishRarity";

export class Fish {
  name: string;
  rarity: FishRarity;
  quantity: number;
  value: number;
  catchDifficulty: number;

  constructor(
    name: string,
    rarity: FishRarity,
    quantity: number,
    value: number,
    catchDifficulty: number,
  ) {
    this.name = name;
    this.rarity = rarity;
    this.quantity = quantity;
    this.value = value;
    this.catchDifficulty = catchDifficulty;
  }
}
