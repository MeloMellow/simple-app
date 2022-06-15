import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { UserEntity } from "./user-entity";

@Entity({ name: "book" })
export class BookEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: "datetime" })
  date: Date;

  @ManyToOne((type) => UserEntity, (user) => user.books) user: UserEntity;
}
