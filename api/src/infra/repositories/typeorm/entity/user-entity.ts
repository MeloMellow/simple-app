import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { BookEntity } from './book-entity'

@Entity({ name: 'user' })
export class UserEntity {
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    name: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @OneToMany(type => BookEntity, book => book.user) books: BookEntity[];

}