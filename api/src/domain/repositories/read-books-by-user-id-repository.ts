import { Book } from "../models";

export interface IReadBooksByUserIdRepository{
  read(userId: String): Promise<Array<Book> | null>
}