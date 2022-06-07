import { User } from "../../models";

export type ICreateUserUseCaseParam = {
  name: string;
  email: string;
  password: string;
};
export interface ICreateUserUseCase {
  create(createUserUseCaseParam: ICreateUserUseCaseParam): Promise<User | null>;
}
