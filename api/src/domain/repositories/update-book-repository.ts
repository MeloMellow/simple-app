import { Book } from "../models";

export interface IUpdateBookRepository{
  update(book: Book): Promise<Book | null>
}