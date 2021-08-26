import { Test, TestingModule } from '@nestjs/testing';
import { LoyaltyCardsLogsController } from './loyalty-cards-logs.controller';
import { LoyaltyCardsLogsService } from './loyalty-cards-logs.service';

describe('LoyaltyCardsLogsController', () => {
  let controller: LoyaltyCardsLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoyaltyCardsLogsController],
      providers: [LoyaltyCardsLogsService],
    }).compile();

    controller = module.get<LoyaltyCardsLogsController>(LoyaltyCardsLogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
