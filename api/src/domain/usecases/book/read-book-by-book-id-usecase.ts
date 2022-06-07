import { Book } from "../../models";

export interface IReadBookByBookIdUseCase {
  read(userId: String, bookId: String): Promise<Book | null>;
}
