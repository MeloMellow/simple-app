import { Book } from "../models";

export interface IReadBookByBookIdRepository {
  read(bookId: string): Promise<Book | null>;
}
