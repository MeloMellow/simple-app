import { User } from "../../domain/models";


export interface ICreateUserRepository{
  create(user: User): Promise<User | null>
}