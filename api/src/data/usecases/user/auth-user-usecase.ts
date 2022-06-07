import { ILoadUserByEmailRepository } from "../../../domain/repositories/load-user-by-email-repository";
import {
  AuthUserUseCaseResponse,
  IAuthUserUseCase,
} from "../../../domain/usecases/user";
import Encrypter from "../../../utils/encrypter";
import { MissingParamError } from "../../../utils/errors";
import TokenGenerator from "../../../utils/token-generator";

export default class AuthUserUseCase implements IAuthUserUseCase {
  constructor(
    private readonly loadUserByEmailRepository: ILoadUserByEmailRepository,
    private readonly encrypter: Encrypter,
    private readonly tokenGenerator: TokenGenerator
  ) {}

  async auth(
    email: string,
    password: string
  ): Promise<AuthUserUseCaseResponse | null> {
    if (!email) {
      throw new MissingParamError("email");
    }
    if (!password) {
      throw new MissingParamError("password");
    }
    const user = await this.loadUserByEmailRepository.load(email);
    const isValid =
      user && (await this.encrypter.compare(password, user.hashedPassword));
    if (isValid && user.id) {
      const accessToken = this.tokenGenerator.generate(
        user.id,
        user.name,
        user.email
      );
      return { accessToken, user };
    }
    return null;
  }
}
