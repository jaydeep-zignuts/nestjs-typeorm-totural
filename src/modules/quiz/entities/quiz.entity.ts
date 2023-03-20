
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Question } from "./question.entity"

@Entity({name : 'quizes'})
export class Quiz extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id:number
    
    @Column()
    title: string

    @Column()
    description: string

    @OneToMany(()=> Question, (question)=>question.quiz)
    questions: Question[]
}

