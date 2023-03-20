import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { ApiSecurity, ApiTags } from "@nestjs/swagger";
import { CreateHistogramOptions } from "perf_hooks";
import { JwtAuthGuard } from "src/modules/auth/jwt-auth.guard";
import { CreateQuestionDto } from "../dto/CreateQuestion.dto";
import { Question } from "../entities/question.entity";
import { QuestionService } from "../services/question.service";
import { QuizService } from "../services/quiz.service";


@ApiTags("Questions")
@ApiSecurity('bearer')
@UseGuards(JwtAuthGuard)
@Controller('question')
export class QuestionController{
    constructor(
        private questionService: QuestionService,
        private quizService: QuizService){} 

    @Post()
    async saveQuestion(@Body() question: CreateQuestionDto){
        const quiz = await this.quizService.getQuizById(question.quizId) 
        return this.questionService.createQuestion(question, quiz);         
    }
}
