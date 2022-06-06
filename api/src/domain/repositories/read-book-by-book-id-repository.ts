import { Book } from "../models";

export interface IReadBookByBookIdRepository{
  read(bookId: String): Promise<Book | null>
}