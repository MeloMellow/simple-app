import { User } from "../../domain/models";

export interface ILoadUserByEmailRepository{
  load(email: String): Promise<User | null>
}