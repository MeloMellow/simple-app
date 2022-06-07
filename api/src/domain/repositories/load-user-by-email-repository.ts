import { User } from "../models";

export interface ILoadUserByEmailRepository{
  load(email: string): Promise<User | null>
}