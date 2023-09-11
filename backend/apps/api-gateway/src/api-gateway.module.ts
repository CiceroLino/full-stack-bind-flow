import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ApiGatewayController],
})
export class ApiGatewayModule {}
