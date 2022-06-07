import { Book } from "../models";

export interface ICreateBookRepository {
  create(book: Book): Promise<Book | null>;
}
