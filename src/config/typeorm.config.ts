import { ConfigModule, ConfigService } from "@nestjs/config"
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm"
import { truncate } from "fs"
import { User } from "src/modules/user/user.entity"
import { Option } from "../modules/quiz/entities/optoins.entity"
import { Question } from "../modules/quiz/entities/question.entity"
import { Quiz } from "../modules/quiz/entities/quiz.entity"

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions={
    useFactory: async (): Promise<TypeOrmModuleOptions>=>{
        return {
            type: 'mysql',
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT, 10),
            username: process.env.DB_USERNAME,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
            entities: [__dirname + '/../**/*.entity{.ts,.js}'] ,//[Quiz, Question, Option, User ],
            migrations: [__dirname + '/../migrations/*{.ts,.js}'],
            
            extra: {
                charset: 'utf8mb4_unicode_ci',
            },
        
            synchronize: true,
            logging:true  
        }  
    }  
}
export const typeOrmConfig: TypeOrmModuleOptions={
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'] ,//[Quiz, Question, Option, User ],
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],

    extra:{
        charset: 'utf8mb4_unicode_ci',
    },
    synchronize:false,
    logging:true
}


// export default class TypeOrmConfig{
//     static getOrmConfig(configService: ConfigService):TypeOrmModuleOptions{
//         return {
//             type: 'mysql',
//             host: process.env.DB_HOST, //('DB_HOST'),
//             port: configService.get('DB_PORT'),
//             username: configService.get('DB_USERNAME'),
//             password: configService.get('DB_PASSWORD'),
//             database: configService.get('DB_NAME'),
//             entities: [Quiz, Question, Option, User ],
//             synchronize: true,
//             logging:true
//         } 
//     } 
// } 

// export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions={

//     imports:[ConfigModule],
//     useFactory: async(configService: ConfigService):
//     Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
//     inject: [ConfigService]


// }    