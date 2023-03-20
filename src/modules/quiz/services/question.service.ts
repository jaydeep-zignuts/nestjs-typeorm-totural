import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateQuestionDto } from "../dto/CreateQuestion.dto";
import { Question } from "../entities/question.entity";
import { Quiz } from "../entities/quiz.entity";

@Injectable()
export class QuestionService{
    constructor(
        @InjectRepository(Question) private questionRepository:Repository<Question>){}
    
        async createQuestion(question:  CreateQuestionDto, quiz: Quiz){
            const newQuestion = await this.questionRepository.save({
                question: question.question
            });
         
            quiz.questions=[newQuestion, ...quiz.questions];
            await quiz.save();

            return newQuestion;
        }

        async findQuestionById(id: number){
            return await this.questionRepository.findOne({where:{id} ,relations:['quiz','options']})
        }
} 