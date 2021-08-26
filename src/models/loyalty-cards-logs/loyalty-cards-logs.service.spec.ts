import { Test, TestingModule } from '@nestjs/testing';
import { LoyaltyCardsLogsService } from './loyalty-cards-logs.service';

describe('LoyaltyCardsLogsService', () => {
  let service: LoyaltyCardsLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoyaltyCardsLogsService],
    }).compile();

    service = module.get<LoyaltyCardsLogsService>(LoyaltyCardsLogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
