import { User } from "../../../domain/models"
import { ILoadUserByEmailUseCase } from "../../../domain/usecases/user"
import { ILoadUserByEmailRepository } from "../../../infra/repositories/load-user-by-email-repository"
import { MissingParamError } from "../../../utils/errors"

export default class LoadUserByEmailUseCase implements ILoadUserByEmailUseCase {
  constructor (private readonly loadUserByEmailRepository: ILoadUserByEmailRepository){}

  async load (email: string): Promise<User | null>{
    if (!email) {
      throw new MissingParamError('email')
    }
    const user = await this.loadUserByEmailRepository.load(email)
    if (user) {
      return user
    }
    return null
  }
}