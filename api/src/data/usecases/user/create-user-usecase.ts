import { User } from "../../../domain/models";
import { ICreateUserRepository } from "../../../domain/repositories/create-user-repository";
import {
  ICreateUserUseCase,
  ICreateUserUseCaseParam,
} from "../../../domain/usecases/user";
import Encrypter from "../../../utils/encrypter";
import { MissingParamError } from "../../../utils/errors";

export default class CreateUserUseCase implements ICreateUserUseCase {
  constructor(
    private readonly createUserRepository: ICreateUserRepository,
    private readonly encrypter: Encrypter
  ) {}

  async create(
    createUserUseCaseParam: ICreateUserUseCaseParam
  ): Promise<User | null> {
    if (!createUserUseCaseParam.name) {
      throw new MissingParamError("name");
    }
    if (!createUserUseCaseParam.email) {
      throw new MissingParamError("email");
    }
    if (!createUserUseCaseParam.password) {
      throw new MissingParamError("password");
    }
    const hashedPassword = await this.encrypter.hash(
      createUserUseCaseParam.password
    );
    let user: User | null = {
      name: createUserUseCaseParam.name,
      email: createUserUseCaseParam.email,
      hashedPassword,
    };
    user = await this.createUserRepository.create(user);
    if (user) {
      return user;
    }
    return null;
  }
}
