import { User } from "../../models"

export interface ICreateUserUseCase{
  create(name: string, email: String, password: String): Promise<User | null>
}