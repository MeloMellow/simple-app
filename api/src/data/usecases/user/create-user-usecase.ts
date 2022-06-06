import { User } from "../../../domain/models"
import { ICreateUserUseCase } from "../../../domain/usecases/user"
import { ICreateUserRepository } from "../../../infra/repositories/create-user-repository"
import Encrypter from "../../../utils/encrypter"
import { MissingParamError } from "../../../utils/errors"

export default class CreateUserUseCase implements ICreateUserUseCase{
  constructor (
    private readonly createUserRepository: ICreateUserRepository, 
    private readonly encrypter: Encrypter) 
  {}

  async create (name: string, email: string, password: string): Promise<User | null>{
    if (!name) {
      throw new MissingParamError('name')
    }
    if (!email) {
      throw new MissingParamError('email')
    }
    if (!password) {
      throw new MissingParamError('password')
    }
    const hashedPassword = await this.encrypter.hash(password)
    let user: User | null = {name, email, hashedPassword}
    user = await this.createUserRepository.create(user)
    if (user) {
      return user
    }
    return null
  }
}