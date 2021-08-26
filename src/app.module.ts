import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PunchersPurchasePunchRequestModule } from './models/punchers-purchase-punch-request/punchers-purchase-punch-request.module';
import { LoyaltyCardsLogsModule } from './models/loyalty-cards-logs/loyalty-cards-logs.module';
import { LoyaltyCardsModule } from './models/loyalty-cards/loyalty-cards.module';
import { ConfigModule } from '@nestjs/config';
import loyaltyCardsConfiguration from 'src/config/loyalty-cards/configuration';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [loyaltyCardsConfiguration],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(),
    PunchersPurchasePunchRequestModule,
    LoyaltyCardsLogsModule,
    LoyaltyCardsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
