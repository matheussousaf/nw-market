import { addDays } from 'date-fns';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ItemService } from '../item/item.service';
import { PrismaService } from '../prisma.service';
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdPriceDto } from './dto/update-ad-price.dto';

@Injectable()
export class AdService {
  constructor(
    private primaService: PrismaService,
    private itemService: ItemService,
  ) {}

  async create(createAdDto: CreateAdDto) {
    try {
      const { initialPrice, itemDto, userId, buyOutPrice, canDeliver } =
        createAdDto;

      const item = await this.itemService.create(itemDto);

      if (!item) {
        throw new BadRequestException(
          'There was en error while trying to create the item.',
        );
      }

      return await this.primaService.ad.create({
        data: {
          userId: userId,
          itemId: item.id,
          initialPrice,
          buyOutPrice,
          canDeliver,
          currentOffer: 0,
          endDate: addDays(new Date(), 3),
        },
      });
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  findAll() {
    return this.primaService.ad.findMany({ include: { item: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} ad`;
  }

  updatePrice(id: string, updateAdDto: UpdateAdPriceDto) {
    const { price } = updateAdDto;

    return this.primaService.ad.update({
      data: {
        currentOffer: +price,
      },
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} ad`;
  }
}
