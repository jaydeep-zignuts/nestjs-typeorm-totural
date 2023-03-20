import { OnEvent } from "@nestjs/event-emitter";
import { ResponseAddEvent } from "../events/response-add.event";

export class ResponseService{

    @OnEvent('response.submitted')
    handleIfResponseIsCorrect(payload: ResponseAddEvent){
        console.log("handleIfResponseIsCorrect", payload);
        
    }

}