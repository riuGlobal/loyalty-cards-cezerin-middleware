import { PunchersPurchasePunchRequest } from 'src/models/punchers-purchase-punch-request/entities/punchers-purchase-punch-request.entity';
import { Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('logs-loyalty-cards')
export class LoyaltyCardsLog {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(
    () => PunchersPurchasePunchRequest,
    (purchasePunchRequests) => purchasePunchRequests.logs,
  )
  purchasePunchRequests: PunchersPurchasePunchRequest;
}
