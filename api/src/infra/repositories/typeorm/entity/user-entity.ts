import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { BookEntity } from './book-entity'

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    name: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @OneToMany(type => Book, book => book.user) books: Book[];

}