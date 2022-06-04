import { Book } from "../../models"

export interface ICreateBookByUserIdUseCase{
  create(book: Book): Promise<Book | null>
}