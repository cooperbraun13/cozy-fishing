import { FishingRod } from "../models/FishingRod";

export const twigRod = new FishingRod("Twig Rod", 0, 0);
export const bambooRod = new FishingRod("Bamboo Rod", 10, 40);
export const steelRod = new FishingRod("Steel Rod", 20, 100);
export const crystalRod = new FishingRod("Crystal Rod", 35, 250);
export const goldenRod = new FishingRod("Golden Rod", 50, 1000);

export const shopRods = [bambooRod, steelRod, crystalRod, goldenRod];
