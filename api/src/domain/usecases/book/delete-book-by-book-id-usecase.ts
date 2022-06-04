import { Book } from "../../models"

export interface IDeleteBookByBookIdUseCase{
  delete(bookId: String): Promise<boolean | null>
}