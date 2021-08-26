import { HttpModule, Module } from '@nestjs/common';
import { AssignedCardPunchesService } from './assigned-card-punches.service';

@Module({
  imports: [HttpModule],
  providers: [AssignedCardPunchesService],
  exports: [AssignedCardPunchesService],
})
export class AssignedCardPunchesModule {}
