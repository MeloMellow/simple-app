import { Book } from "../../domain/models";

export interface IReadBookByBookIdRepository{
  read(bookId: String): Promise<Book | null>
}