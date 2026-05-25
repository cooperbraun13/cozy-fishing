export class FishingRod {
  name: string;
  catchBonus: number;
  price: number;

  constructor(name: string, catchBonus: number, price: number) {
    this.name = name;
    this.catchBonus = catchBonus;
    this.price = price;
  }
}
