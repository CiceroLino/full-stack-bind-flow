import { Module } from '@nestjs/common';
import { PaymentsMicroserviceController } from './payments-microservice.controller';
import { PaymentsMicroserviceService } from './payments-microservice.service';

@Module({
  imports: [],
  controllers: [PaymentsMicroserviceController],
  providers: [PaymentsMicroserviceService],
})
export class PaymentsMicroserviceModule {}
