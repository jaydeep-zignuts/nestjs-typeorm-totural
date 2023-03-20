import {  HttpException, HttpStatus, Render } from "@nestjs/common";


export class ApiTokenPaymentException extends HttpException{
    constructor(){
        super('Token suggest payment is rewuired ', HttpStatus.PAYMENT_REQUIRED);
    }

}