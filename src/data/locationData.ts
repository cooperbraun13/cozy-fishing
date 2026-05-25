import { FishingLocation } from "../models/FishingLocation";
import {
  bluegill,
  perch,
  bass,
  koi,
  goldenKoi,
  trout,
  salmon,
  catfish,
  walleye,
  pike,
  muskie,
  sturgeon,
} from "./fishData";

export const sunnyPond = new FishingLocation("Sunny Pond", [
  bluegill,
  perch,
  bass,
  koi,
  goldenKoi,
]);

export const pineRiver = new FishingLocation("Pine River", [
  trout,
  salmon,
  catfish,
]);

export const darkLake = new FishingLocation("Dark Lake", [
  walleye,
  pike,
  muskie,
  sturgeon,
]);
