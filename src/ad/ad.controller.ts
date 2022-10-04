import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AdService } from './ad.service';
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdPriceDto } from './dto/update-ad-price.dto';

@Controller('ad')
export class AdController {
  constructor(private readonly adService: AdService) {}

  @Post()
  create(@Body() createAdDto: CreateAdDto) {
    return this.adService.create(createAdDto);
  }

  @Get()
  findAll() {
    return this.adService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrice: UpdateAdPriceDto) {
    return this.adService.updatePrice(id, updatePrice);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adService.remove(+id);
  }
}
