import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entity } from 'typeorm';
import { QuestionController } from './controllers/question.controller';
import { Question } from './entities/question.entity';
import { QuestionService } from './services/question.service';
import { QuizController } from './controllers/quiz.controller';
import { Quiz } from './entities/quiz.entity';
import { QuizService } from './services/quiz.service';
import { Option } from './entities/optoins.entity';
import { OptionController } from './controllers/option.controller';
import { OptionService } from './services/option.service';
import { UserModule } from '../user/user.module';
import { ResponseService } from './services/response.service';
import { ResponseController } from './controllers/response.controller';

@Module({
    imports: [TypeOrmModule
        .forFeature([
            Quiz,
            Question,
            Option
        ]),
        UserModule
    ],
   controllers:[QuizController, QuestionController,OptionController, ResponseController],
   providers:[QuizService, QuestionService, OptionService, ResponseService]
   
})
export class QuizModule {}
