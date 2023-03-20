import { Controller, Get, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiSecurity } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { Unique } from 'typeorm';
import { AppService } from './app.service';
import { JwtAuthGuard } from './modules/auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get()
  getHello(): string {
    console.log(__dirname);
    
     return this.appService.getHello();
  }

  @Post('/file')
  @UseInterceptors(FileInterceptor('file',{
    storage: diskStorage({
      destination:join(__dirname, 'uploads'),
      filename:(req, file, callback) =>{ 
        console.log(req.file);
        
        const uniqueSuffix=Date.now() + '-' +Math.round(Math.random() * 1e9);

        const ext = extname(file.originalname);
        const filename = `${uniqueSuffix}${ext}`;
        console.log(uniqueSuffix, "is file name");

        callback(null, filename);
      }
    })
  }))
  
  handleUpload(@UploadedFile() file: Express.Multer.File){
    console.log('file', file);

    return 'file uploaded...'
  }
}
