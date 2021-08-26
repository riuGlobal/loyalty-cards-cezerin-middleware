import { Test, TestingModule } from '@nestjs/testing';
import { AssignedCardsService } from './assigned-cards.service';

describe('AssignedCardsService', () => {
  let service: AssignedCardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssignedCardsService],
    }).compile();

    service = module.get<AssignedCardsService>(AssignedCardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
