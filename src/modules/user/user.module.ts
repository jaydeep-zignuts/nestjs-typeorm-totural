import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserService } from './user.service';

@Module({
    imports: [],
    providers: [UserService],
    controllers: [UserController],
    exports: [UserService]

})
export class UserModule{}