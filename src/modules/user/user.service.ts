import { Injectable } from "@nestjs/common";
import { UserRegisterRequestDto } from "./dto/user-register.req.dto";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService{
    async doUserRegistration(userRegister: UserRegisterRequestDto){
        const salt = await bcrypt.genSalt();
        const password= await bcrypt.hash(userRegister.password, salt);
        const user = new User();
        user.name = userRegister.name;
        user.email= userRegister.email;
        user.password= password;
        return await user.save();
        
    }

    async getUserByEmail(email: string): Promise<User | undefined >{
        return User.findOne( { where: { email  } } )
    }

    async getUserById(id: number): Promise<User | undefined >{
        return User.findOne( { where: { id  } } )
    }

}