import { HttpModule, Module } from '@nestjs/common';
import { AssignedCardsModule } from './assigned-cards/assigned-cards.module';
import { AssignedCardPunchesModule } from './assigned-card-punches/assigned-card-punches.module';
import { LoyaltyCardsLogsModule } from '../loyalty-cards-logs/loyalty-cards-logs.module';

@Module({
  imports: [AssignedCardsModule, AssignedCardPunchesModule],
  exports: [AssignedCardsModule, AssignedCardPunchesModule],
})
export class LoyaltyCardsModule {}
