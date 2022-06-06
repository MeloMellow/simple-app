import { Book } from "../../domain/models";

export interface ICreateBookRepository{
  create(book: Book): Promise<Book | null>
}