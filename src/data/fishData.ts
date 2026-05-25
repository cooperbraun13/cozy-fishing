// name: string;
// rarity: FishRarity;
// quantity: number;
// value: number;
// catchDifficulty: number;

import { FishRarity } from "../enums/FishRarity";
import { Fish } from "../models/Fish";

// Sunny pond
export const bluegill = new Fish("Bluegill", FishRarity.Common, 5, 80);
export const perch = new Fish("Perch", FishRarity.Common, 8, 70);
export const bass = new Fish("Bass", FishRarity.Uncommon, 15, 45);
export const koi = new Fish("Koi", FishRarity.Rare, 40, 12);
export const goldenKoi = new Fish("Bass", FishRarity.Uncommon, 300, 0.5);

// Pine river
export const trout = new Fish("Trout", FishRarity.Common, 10, 65);
export const salmon = new Fish("Salmon", FishRarity.Uncommon, 25, 35);
export const catfish = new Fish("Catfish", FishRarity.Rare, 40, 15);

// Dark lake
export const walleye = new Fish("Walleye", FishRarity.Uncommon, 30, 30);
export const pike = new Fish("Pike", FishRarity.Rare, 55, 10);
export const muskie = new Fish("Muskie", FishRarity.Epic, 100, 5);
export const sturgeon = new Fish("Sturgeon", FishRarity.Legendary, 250, 1);
