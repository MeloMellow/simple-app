import { Book } from "../../domain/models";

export interface IUpdateBookRepository{
  update(book: Book): Promise<Book | null>
}