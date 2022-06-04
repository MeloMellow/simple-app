import { Book } from "../../models"

export interface IUpdateBookByBookIdUseCase{
  update(book: Book): Promise<Book | null>
}