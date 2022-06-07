import { Book } from "../../models";

export interface IUpdateBookByBookIdUseCase {
  update(userId: String, book: Book): Promise<Book | null>;
}
