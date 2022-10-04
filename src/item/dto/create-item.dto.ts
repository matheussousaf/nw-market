import { Perk, Prisma } from '@prisma/client';

export enum ItemWeight {
  LIGHT = 'LIGHT',
  MEDIUM = 'MEDIUM',
  HEAVY = 'HEAVY',
}

export enum ItemRarity {
  EPIC = 0,
  LEGENDARY = 1,
}

export class CreateItemDto {
  name: string;
  weight: ItemWeight;
  perks: any[];
  rarity: number;
}
