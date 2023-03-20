import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './modules/quiz/dto/CreateQuiz.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  
}
