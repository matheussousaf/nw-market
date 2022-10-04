import { Module } from '@nestjs/common';
import { AdService } from './ad.service';
import { AdController } from './ad.controller';
import { PrismaService } from '../prisma.service';
import { ItemService } from '../item/item.service';

@Module({
  controllers: [AdController],
  providers: [AdService, PrismaService, ItemService],
})
export class AdModule {}
