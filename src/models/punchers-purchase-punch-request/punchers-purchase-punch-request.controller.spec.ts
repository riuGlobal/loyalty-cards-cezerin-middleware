import { Test, TestingModule } from '@nestjs/testing';
import { PunchersPurchasePunchRequestController } from './punchers-purchase-punch-request.controller';
import { PunchersPurchasePunchRequestService } from './punchers-purchase-punch-request.service';

describe('PunchersPurchasePunchRequestController', () => {
  let controller: PunchersPurchasePunchRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PunchersPurchasePunchRequestController],
      providers: [PunchersPurchasePunchRequestService],
    }).compile();

    controller = module.get<PunchersPurchasePunchRequestController>(PunchersPurchasePunchRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
