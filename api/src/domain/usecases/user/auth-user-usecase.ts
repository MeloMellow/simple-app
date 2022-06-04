import { User } from "../../models"

export type AuthUserUseCaseResponse = {
  accessToken: String
  user: User
}
export interface IAuthUserUseCase{
  auth(email: String, password: String): Promise<AuthUserUseCaseResponse | null>
}