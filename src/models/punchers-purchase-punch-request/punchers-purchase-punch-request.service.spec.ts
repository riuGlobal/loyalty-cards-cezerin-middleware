import { Test, TestingModule } from '@nestjs/testing';
import { PunchersPurchasePunchRequestService } from './punchers-purchase-punch-request.service';

describe('PunchersPurchasePunchRequestService', () => {
  let service: PunchersPurchasePunchRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PunchersPurchasePunchRequestService],
    }).compile();

    service = module.get<PunchersPurchasePunchRequestService>(PunchersPurchasePunchRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
