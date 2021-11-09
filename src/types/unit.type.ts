import type { AbilityType } from "./ability.type";
import type { WeaponType } from "./weapon.type";

export type UnitType = {
  id: string;
  name: string;
  type: string;
  stats: { [key: string]: number };
  weapons: WeaponType[];
  abilities?: AbilityType[];
  image: string;
};
