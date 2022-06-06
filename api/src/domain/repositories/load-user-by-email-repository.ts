import { User } from "../models";

export interface ILoadUserByEmailRepository{
  load(email: String): Promise<User | null>
}