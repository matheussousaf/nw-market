import { Attribute, Perk, ItemWeight } from '@prisma/client';

export enum ItemRarity {
  EPIC = 0,
  LEGENDARY = 1,
}

interface ItemPerk extends Perk {
  attributes: Attribute[];
}

export class CreateItemDto {
  name: string;
  weight: ItemWeight;
  perks: ItemPerk[];
  rarity: number;
}
