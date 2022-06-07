import { Book } from "../models";

export interface IUpdateBookByBookIdRepository {
  update(book: Book): Promise<Book | null>;
}
