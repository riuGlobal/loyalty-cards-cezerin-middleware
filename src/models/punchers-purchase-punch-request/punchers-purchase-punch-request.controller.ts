import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PunchersPurchasePunchRequestService } from './punchers-purchase-punch-request.service';
import { CreatePunchersPurchasePunchRequestDto } from './dto/create-punchers-purchase-punch-request.dto';
import { UpdatePunchersPurchasePunchRequestDto } from './dto/update-punchers-purchase-punch-request.dto';

@Controller('punchers/purchase-punch-requests')
export class PunchersPurchasePunchRequestController {
  constructor(
    private readonly punchersPurchasePunchRequestService: PunchersPurchasePunchRequestService,
  ) {}

  @Post()
  create(
    @Body()
    createPunchersPurchasePunchRequestDto: CreatePunchersPurchasePunchRequestDto,
  ) {
    return this.punchersPurchasePunchRequestService.create(
      createPunchersPurchasePunchRequestDto,
    );
  }

  // @Get()
  // findAll() {
  //   return this.punchersPurchasePunchRequestService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.punchersPurchasePunchRequestService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePunchersPurchasePunchRequestDto: UpdatePunchersPurchasePunchRequestDto) {
  //   return this.punchersPurchasePunchRequestService.update(+id, updatePunchersPurchasePunchRequestDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.punchersPurchasePunchRequestService.remove(+id);
  // }
}
