import { PartialType } from '@nestjs/mapped-types';
import { CreateLoyaltyCardsLogDto } from './create-loyalty-cards-log.dto';

export class UpdateLoyaltyCardsLogDto extends PartialType(CreateLoyaltyCardsLogDto) {}
