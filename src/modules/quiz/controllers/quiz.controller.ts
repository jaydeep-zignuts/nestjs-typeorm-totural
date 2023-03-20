import { Body, Controller, DefaultValuePipe, Get, HttpCode, Param, ParseIntPipe, Post, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { AdminRoleGuard } from 'src/modules/auth/admin-role.guard';
import { JwtAuthGuard } from 'src/modules/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/modules/auth/local-auth.guard';
import { Roles } from 'src/modules/auth/roles.decorators';
import { RolesGuard } from 'src/modules/auth/roles.guards';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { QuizService } from '../services/quiz.service';

@ApiTags('Quiz')
@ApiSecurity('bearer')
@UseGuards(JwtAuthGuard)
@Controller('quiz')
export class QuizController {
    constructor(private quizService: QuizService){}

    
    @Get()
    async getAllQuiz (){

       
        return await this.quizService.getAllQuiz();
    }
    // async getAllQuiz(
    //     @Query('page',new DefaultValuePipe(1), ParseIntPipe) page: number=1,
    //     @Query('limit',new DefaultValuePipe(10), ParseIntPipe) limit: number=1,

    // ):Promise<Pagination<Quiz>>{

    //     const options: IPaginationOptions={
    //         limit,
    //         page
    //     }
    //     // return await this.quizService.paginate(options);
    // }
 
    @Post('/create')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    @UseGuards(RolesGuard)
    @Roles('admin', 'members')
    async createQuiz(@Body() quizData: CreateQuizDto){
        return await this.quizService.createNewQuiz(quizData) ; 
     }

     @Get('/:id')
     async getQuizById(@Param('id') id: number){

        return await this.quizService.getQuizById(id);
     }
}
