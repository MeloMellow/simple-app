import { User } from "../../models"

export interface ILoadUserByEmailUseCase{
  load(email: String): Promise<User | null>
}