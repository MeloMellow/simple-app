import { Book } from "../../models"

export interface IReadBookByBookIdUseCase{
  read(bookId: String): Promise<Book | null>
}