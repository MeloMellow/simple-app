import { User } from "../../models"

export interface ICreateUserUseCase{
  create(email: String, password: String): Promise<User | null>
}