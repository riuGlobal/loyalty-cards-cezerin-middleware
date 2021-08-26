import { HttpModule, Module } from '@nestjs/common';
import { AssignedCardsService } from './assigned-cards.service';

@Module({
  imports: [HttpModule],
  providers: [AssignedCardsService],
  exports: [AssignedCardsService],
})
export class AssignedCardsModule {}
