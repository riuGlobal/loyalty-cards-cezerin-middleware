import { LoyaltyCardsLog } from 'src/models/loyalty-cards-logs/entities/loyalty-cards-log.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryColumn,
  Unique,
} from 'typeorm';

@Entity('purchase-punch-requests')
export class PunchersPurchasePunchRequest {
  @PrimaryColumn()
  orderId: string;

  @Column({ nullable: true })
  userId: string;

  @Column({ nullable: true })
  punchedAssignedCardId: number;

  @ManyToMany(() => LoyaltyCardsLog, (logs) => logs.purchasePunchRequests)
  @JoinTable()
  logs: LoyaltyCardsLog;
}
