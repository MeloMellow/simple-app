import { User } from "../../../domain/models";
import { ILoadUserByEmailRepository } from "../../../domain/repositories/load-user-by-email-repository";
import { ILoadUserByEmailUseCase } from "../../../domain/usecases/user";
import { MissingParamError } from "../../../utils/errors";

export default class LoadUserByEmailUseCase implements ILoadUserByEmailUseCase {
  constructor(
    private readonly loadUserByEmailRepository: ILoadUserByEmailRepository
  ) {}

  async load(email: string): Promise<User | null> {
    if (!email) {
      throw new MissingParamError("email");
    }
    const user = await this.loadUserByEmailRepository.load(email);
    if (user) {
      return user;
    }
    return null;
  }
}
