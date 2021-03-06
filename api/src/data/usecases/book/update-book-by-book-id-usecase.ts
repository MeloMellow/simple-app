import { Book } from "../../../domain/models";
import { IUpdateBookByBookIdUseCase } from "../../../domain/usecases/book";
import { IUpdateBookByBookIdRepository } from "../../../domain/repositories/update-book-repository";
import { MissingParamError } from "../../../utils/errors";
import { IReadBookByBookIdRepository } from "../../../domain/repositories/read-book-by-book-id-repository";

export default class UpdateBookByBookIdUseCase
  implements IUpdateBookByBookIdUseCase
{
  constructor(
    private readonly readBookByBookIdRepository: IReadBookByBookIdRepository,
    private readonly updateBookRepository: IUpdateBookByBookIdRepository
  ) {}

  async update(userId: string, book: Book): Promise<Book | null> {
    if (!userId) {
      throw new MissingParamError("userId");
    }
    if (!book.id) {
      throw new MissingParamError("bookId");
    }
    let bookResponse = await this.readBookByBookIdRepository.read(book.id);
    if (!bookResponse || bookResponse.userId != userId) {
      return null;
    }
    bookResponse = await this.updateBookRepository.update(book);
    return bookResponse;
  }
}
