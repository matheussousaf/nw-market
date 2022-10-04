import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { ItemModule } from './item/item.module';
import { AdModule } from './ad/ad.module';

@Module({
  imports: [ItemModule, AdModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
