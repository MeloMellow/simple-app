import { Book } from "../../models"

export interface IDeleteBookByBookIdUseCase{
  delete(userId: String, bookId: String): Promise<boolean | null>
}