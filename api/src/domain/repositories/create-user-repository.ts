import { User } from "../models";

export interface ICreateUserRepository {
  create(user: User): Promise<User | null>;
}
