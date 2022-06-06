import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { UserEntity } from './user-entity'

@Entity()
export class BookEntity {
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column({ type: 'timestamp' })
    date: Date

    @ManyToOne(type => User, user => user.books) user: User;

}