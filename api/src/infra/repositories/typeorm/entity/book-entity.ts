import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { User } from './user-entity'

@Entity()
export class Book {
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column({ type: 'timestamp' })
    date: Date

    @ManyToOne(type => User, user => user.books) users: User;

}