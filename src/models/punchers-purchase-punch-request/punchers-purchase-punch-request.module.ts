import { Module } from '@nestjs/common';
import { PunchersPurchasePunchRequestService } from './punchers-purchase-punch-request.service';
import { PunchersPurchasePunchRequestController } from './punchers-purchase-punch-request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PunchersPurchasePunchRequest } from './entities/punchers-purchase-punch-request.entity';
import { LoyaltyCardsModule } from '../loyalty-cards/loyalty-cards.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PunchersPurchasePunchRequest]),
    LoyaltyCardsModule,
  ],
  controllers: [PunchersPurchasePunchRequestController],
  providers: [PunchersPurchasePunchRequestService],
})
export class PunchersPurchasePunchRequestModule {}
