import { CreateItemDto } from 'src/item/dto/create-item.dto';

export class CreateAdDto {
  initialPrice: number;
  buyOutPrice: number;
  canDeliver: boolean;
  userId: string;
  itemDto: CreateItemDto;
}
