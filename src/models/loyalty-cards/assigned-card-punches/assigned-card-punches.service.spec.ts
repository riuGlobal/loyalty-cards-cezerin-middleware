import { Test, TestingModule } from '@nestjs/testing';
import { AssignedCardPunchesService } from './assigned-card-punches.service';

describe('AssignedCardPunchesService', () => {
  let service: AssignedCardPunchesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssignedCardPunchesService],
    }).compile();

    service = module.get<AssignedCardPunchesService>(AssignedCardPunchesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
