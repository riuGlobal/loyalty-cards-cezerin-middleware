import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PunchersPurchasePunchRequestModule } from './models/punchers-purchase-punch-request/punchers-purchase-punch-request.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PunchersPurchasePunchRequestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
