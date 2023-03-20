import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { ApiProperty } from "@nestjs/swagger";
import { UserRoles } from "./enums/user.enums";

@Entity('users')
export class User extends BaseEntity{

    @ApiProperty({ description: 'Id of the user', example:"1"})
    @PrimaryGeneratedColumn()
    id:number;

    @ApiProperty({ description: 'Name of the user', example:"John Doe"})
    @Column()
    name: string;

    @ApiProperty({ description: 'Email of the user', example :'johndoe@gmail.com' })
    @Column({ unique: true })
    email: string;

    @ApiProperty({ description: 'Hashed user password' })
    @Column()
    password: string;

    @ApiProperty({ description: 'Role of user' })
    @Column({type: 'enum', enum: UserRoles , default: UserRoles.MEMBER })
    role: UserRoles;

    @ApiProperty({ description: 'date when user creadte' })
    @CreateDateColumn()
    createdAt: Date;

    @ApiProperty({ description: 'date when user updated' })
    @UpdateDateColumn()
    updatedAt: Date;

   


}