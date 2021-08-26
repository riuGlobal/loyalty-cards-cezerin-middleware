import { PartialType } from '@nestjs/mapped-types';
import { CreatePunchersPurchasePunchRequestDto } from './create-punchers-purchase-punch-request.dto';

export class UpdatePunchersPurchasePunchRequestDto extends PartialType(CreatePunchersPurchasePunchRequestDto) {}
