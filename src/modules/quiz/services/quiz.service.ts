import { Body, Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate, Pagination } from 'nestjs-typeorm-paginate';
import { events } from 'src/common/constants/event.constants';
import { Repository } from 'typeorm';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { Question } from '../entities/question.entity';
import { Quiz } from '../entities/quiz.entity';
import { ResponseAddEvent } from '../events/response-add.event';

@Injectable()
export class QuizService {

    constructor(
        @InjectRepository(Quiz) 
        private quizRepository: Repository<Quiz>){

    }
    async getAllQuiz(){
        return await this.quizRepository.createQueryBuilder('q')
        .leftJoinAndSelect('q.questions', 'qt')
        // .leftJoinAndSelect('qt.options','o')
        .take(1)
        .getMany();
    }

    // async paginate(options:IPaginationOptions):Promise<Pagination<Quiz>>{
    //     const qb= this.quizRepository.createQueryBuilder('q');
    //     qb.orderBy('q.id',"DESC")
        
    //     return paginate<Quiz>(qb,options);
    // }

    async getQuizById(id: number){
        return await
        this
        .quizRepository
        .findOne({ where: {id}, relations:['questions','questions.options'] })
    }
    async createNewQuiz(quiz: CreateQuizDto){
        return await this.quizRepository.save(quiz); 
      }

    @OnEvent(events.RESPONSE_SUBMITTED)
    checkQuizCompleted(payload: ResponseAddEvent){
        console.log("quiz completed", payload);
    }
}
  
