import { BadRequestException, HttpException, HttpStatus, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { ApiTokenPaymentException } from "../exceptions/api-token-payment.exception";

export class ApiTokenCheckMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
       if(req.headers['api-token']==='my token'){
        // throw new BadRequestException('The Token does not match');
        // throw new HttpException('My response', HttpStatus.PAYMENT_REQUIRED)
        console.log(req.headers['api-token']);
        
        throw new ApiTokenPaymentException();
       }
       next();
        
    }

}