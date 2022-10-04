import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma.service';
import { ItemRarity, ItemWeight } from './dto/create-item.dto';
import { ItemService } from './item.service';

describe('ItemService', () => {
  let service: ItemService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemService, PrismaService],
    }).compile();

    service = module.get<ItemService>(ItemService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should create a new item', async () => {
    prisma.item.create = jest.fn().mockResolvedValue({});

    expect(
      await service.create({
        name: 'Orichalcum Heavy Boots',
        perks: [{ name: 'damn' }],
        rarity: ItemRarity.LEGENDARY,
        weight: ItemWeight.HEAVY,
      }),
    ).toStrictEqual({});
  });
});
