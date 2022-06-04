import { Book } from "../../models"

export interface IReadBooksByUserIdUseCase{
  read(userId: String): Promise<Array<Book> | null>
}