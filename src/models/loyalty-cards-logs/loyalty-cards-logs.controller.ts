import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoyaltyCardsLogsService } from './loyalty-cards-logs.service';
import { CreateLoyaltyCardsLogDto } from './dto/create-loyalty-cards-log.dto';
import { UpdateLoyaltyCardsLogDto } from './dto/update-loyalty-cards-log.dto';

@Controller('loyalty-cards-logs')
export class LoyaltyCardsLogsController {
  constructor(private readonly loyaltyCardsLogsService: LoyaltyCardsLogsService) {}

  @Post()
  create(@Body() createLoyaltyCardsLogDto: CreateLoyaltyCardsLogDto) {
    return this.loyaltyCardsLogsService.create(createLoyaltyCardsLogDto);
  }

  @Get()
  findAll() {
    return this.loyaltyCardsLogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loyaltyCardsLogsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoyaltyCardsLogDto: UpdateLoyaltyCardsLogDto) {
    return this.loyaltyCardsLogsService.update(+id, updateLoyaltyCardsLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loyaltyCardsLogsService.remove(+id);
  }
}
