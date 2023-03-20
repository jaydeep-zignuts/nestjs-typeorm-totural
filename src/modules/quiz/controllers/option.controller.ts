import { Body, Controller, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiSecurity, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/modules/auth/jwt-auth.guard";
import { CreateOptionDto } from "../dto/CreateOption.dto";
import { OptionService } from "../services/option.service";
import { QuestionService } from "../services/question.service";

@ApiTags('Questions')
@ApiSecurity('bearer')
@UseGuards(JwtAuthGuard)
@Controller('question/option')
export class OptionController{
    constructor(
        private optionService :OptionService , 
        private questionService: QuestionService
        ){

        }

        @Post()
        @UsePipes(ValidationPipe)
        async saveOptionToQuestion(@Body() createOption:CreateOptionDto){
            const question= await this.questionService.findQuestionById(createOption.questionId);
            await this.optionService.createOption(createOption, question)
            return {question, createOption};
        }
}