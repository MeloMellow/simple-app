import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Book } from './book-entity'

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @OneToMany(type => Book, book => book.user) books: Book[];

}