import { Book } from "../../domain/models";

export interface IUpdateBookRepository{
  read(book: Book): Promise<Book | null>
}