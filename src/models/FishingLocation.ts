import type { Fish } from "./Fish";

export class FishingLocation {
  name: string;
  fishPool: Fish[];

  constructor(name: string, fishPool: Fish[]) {
    this.name = name;
    this.fishPool = fishPool;
  }
}
