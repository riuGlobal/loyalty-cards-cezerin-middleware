import { Module } from '@nestjs/common';
import { LoyaltyCardsLogsService } from './loyalty-cards-logs.service';
import { LoyaltyCardsLogsController } from './loyalty-cards-logs.controller';

@Module({
  controllers: [LoyaltyCardsLogsController],
  providers: [LoyaltyCardsLogsService]
})
export class LoyaltyCardsLogsModule {}
