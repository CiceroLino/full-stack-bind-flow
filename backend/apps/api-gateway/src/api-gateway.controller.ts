import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import axios from 'axios';
import { ApiGatewayService } from './api-gateway.service';

@Controller('api-gateway')
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService) {}

  @Get()
  getHello(): string {
    return this.apiGatewayService.getHello();
  }

  @Post('auth/login')
  async login(
    @Body() body: { username: string; password: string },
  ): Promise<any> {
    // TODO: temporary any, remove this later
    try {
      const response = await axios.post(
        'http://auth-microservice/auth/login',
        body,
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message || 'Erro desconhecido';
    }
  }

  @Get('payments/:userId')
  async getPayments(@Param('userId') userId: string): Promise<any> {
    // TODO: temporary any, remove this later
    try {
      const response = await axios.get(
        `http://payments-microservice/payments/${userId}`,
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message || 'Erro desconhecido';
    }
  }
}
