import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AssignedCardPunchesService } from '../loyalty-cards/assigned-card-punches/assigned-card-punches.service';
import { AssignedCardsService } from '../loyalty-cards/assigned-cards/assigned-cards.service';
import { CreatePunchersPurchasePunchRequestDto } from './dto/create-punchers-purchase-punch-request.dto';
import { UpdatePunchersPurchasePunchRequestDto } from './dto/update-punchers-purchase-punch-request.dto';
import { PunchersPurchasePunchRequest } from './entities/punchers-purchase-punch-request.entity';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class PunchersPurchasePunchRequestService {
  constructor(
    @InjectRepository(PunchersPurchasePunchRequest)
    private punchRequestRepository: Repository<PunchersPurchasePunchRequest>,

    private assignedCardsService: AssignedCardsService,
    private assignedCardPunchesService: AssignedCardPunchesService,
  ) {}

  async create(
    createPunchersPurchasePunchRequestDto: CreatePunchersPurchasePunchRequestDto,
  ) {
    console.log(
      '--- Log request body received:',
      createPunchersPurchasePunchRequestDto,
    );
    const { id: orderId, customerId: userId } =
      createPunchersPurchasePunchRequestDto;

    const punchRequest = await this.punchRequestRepository.save({
      orderId: orderId,
      userId: userId,
    });

    const punchableCards = await this.assignedCardsService
      .findAll(userId, false)
      .pipe(map((response) => response.data))
      .toPromise();

    if (punchableCards.length > 0) {
      const [cardToPunch] = punchableCards;

      await this.assignedCardPunchesService.create(cardToPunch.id).toPromise();

      await this.punchRequestRepository.update(punchRequest.orderId, {
        punchedAssignedCardId: cardToPunch.id,
      });
    }

    return punchRequest;
  }

  // findAll() {
  //   return `This action returns all punchersPurchasePunchRequest`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} punchersPurchasePunchRequest`;
  // }

  // update(
  //   id: number,
  //   updatePunchersPurchasePunchRequestDto: UpdatePunchersPurchasePunchRequestDto,
  // ) {
  //   return `This action updates a #${id} punchersPurchasePunchRequest`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} punchersPurchasePunchRequest`;
  // }
}
