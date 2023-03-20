import { Body, Controller, HttpStatus, Post, UseGuards, ValidationPipe } from "@nestjs/common";
import { ApiBadGatewayResponse, ApiBadRequestResponse, ApiCreatedResponse, ApiSecurity, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { UserRegisterRequestDto } from "./dto/user-register.req.dto";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@ApiTags('Users')
// @ApiSecurity('bearer')
// @UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController{
    constructor(private userService: UserService){}

    @Post('/register')
    @ApiCreatedResponse({
       description:'Created user Object as response',
       type: User
    })
    @ApiBadRequestResponse({
        description: 'User cannot register, Try Again!!!'
    })
    async doUserRegistration(@Body(
        new ValidationPipe({
            errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        })) userRegister:UserRegisterRequestDto){

         return await this.userService.doUserRegistration(userRegister);
    }
}