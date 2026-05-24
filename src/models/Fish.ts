import type { FishRarity } from "../enums/FishRarity";

class Fish {
  name: string;
  rarity: FishRarity;
  value: number;
  catchDifficulty: number;

  constructor(
    name: string,
    rarity: FishRarity,
    value: number,
    catchDifficulty: number,
  ) {
    this.name = name;
    this.rarity = rarity;
    this.value = value;
    this.catchDifficulty = catchDifficulty;
  }
}
