import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, Length, Matches } from "class-validator";
import { REGEX } from "src/app.utils";

export class UserRegisterRequestDto{

    @ApiProperty({
        description:'Name of User',
        example:'John Doe'
    })
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description:'Email of',
        example:'JohnDoe@gmail.com'
    })
    @IsNotEmpty()
    @IsEmail()
    email:string;

    @ApiProperty({
        description:'Password of user',
        example:'John@doe124'
    })
    @IsNotEmpty()
    @Length(8,24)
    @Matches(REGEX.PASSWORD_RULE, { message: 'Password must contain 1 uppercase, lowercase, number, and special symbol' })
    password: string;
    
    @IsNotEmpty()
    @Length(8,24)
    @Matches(REGEX.PASSWORD_RULE, { message: 'Password must contain 1 uppercase, lowercase, number, and special symbol' })
    confirm: string;
}  