import { IsNotEmpty, Length } from "class-validator";


export class CreateOptionDto{
     
    @IsNotEmpty()
    @Length(2,255,{message:"length must be 2 or greter than 2"})
    text: string;

    @IsNotEmpty()
    questionId: number;

    @IsNotEmpty()
    isCorrect: boolean;

}