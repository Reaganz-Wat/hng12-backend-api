import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { MessageDto } from './message.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Retrieve a message with the current datetime' }) // Swagger description
  @ApiResponse({ status: 200, description: 'Successfully retrieved message', type: MessageDto }) // Response type
  getMessage(): MessageDto {
    return this.appService.getMessage();
  }

}