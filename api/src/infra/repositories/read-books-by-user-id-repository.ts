import { Book } from "../../domain/models";

export interface IReadBooksByUserIdRepository{
  read(userId: String): Promise<Array<Book> | null>
}