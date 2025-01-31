import { Injectable } from '@nestjs/common';
import { MessageDto } from './message.dto';

@Injectable()
export class AppService {
  getMessage(): MessageDto {
    return {
      "email": "reaganwatmon6@gmail.com",
      "current_datetime": new Date().toISOString(),
      "github_url": "https://github.com/Reaganz-Wat/hng12-backend-api"
    }
  }
}