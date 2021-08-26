import { Injectable } from '@nestjs/common';
import { CreateLoyaltyCardsLogDto } from './dto/create-loyalty-cards-log.dto';
import { UpdateLoyaltyCardsLogDto } from './dto/update-loyalty-cards-log.dto';

@Injectable()
export class LoyaltyCardsLogsService {
  create(createLoyaltyCardsLogDto: CreateLoyaltyCardsLogDto) {
    return 'This action adds a new loyaltyCardsLog';
  }

  findAll() {
    return `This action returns all loyaltyCardsLogs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} loyaltyCardsLog`;
  }

  update(id: number, updateLoyaltyCardsLogDto: UpdateLoyaltyCardsLogDto) {
    return `This action updates a #${id} loyaltyCardsLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} loyaltyCardsLog`;
  }
}
