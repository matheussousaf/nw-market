import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Item } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateItemDto } from './dto/create-item.dto';
@Injectable()
export class ItemService {
  constructor(private primaService: PrismaService) {}

  async create(createItemDto: CreateItemDto) {
    const { name, perks, rarity, weight } = createItemDto;

    try {
      const item = await this.primaService.item.create({
        data: {
          name,
          rarity,
          weight,
          perks: {
            create: [
              ...perks.map((perk) => {
                return {
                  ...perk,
                  attributes: {
                    create: [...perk.attributes],
                  },
                };
              }),
            ],
          },
        },
      });

      return item;
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }

  findAll() {
    return this.primaService.item.findMany({
      include: {
        perks: {
          include: {
            attributes: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    const item = await this.primaService.item.findUnique({
      where: { id },
      include: {
        perks: {
          include: {
            attributes: true,
          },
        },
      },
    });

    if (!item) throw new NotFoundException('Item not found');

    return item;
  }

  remove(id: string) {
    return this.primaService.item.delete({
      where: { id },
    });
  }
}
