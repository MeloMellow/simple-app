import { Book } from "../../../domain/models"
import { IReadBookByBookIdUseCase } from "../../../domain/usecases/book"
import { IReadBookByBookIdRepository } from "../../../infra/repositories/read-book-by-book-id-repository"
import { MissingParamError } from "../../../utils/errors"

export default class DeleteBookByBookId implements IReadBookByBookIdUseCase{
  constructor (private readonly readBookByBookIdRepository: IReadBookByBookIdRepository) {}

  async read (userId: string, bookId: string): Promise<Book | null>{
    if (!userId) {
      throw new MissingParamError('userId')
    }
    if (!bookId) {
      throw new MissingParamError('bookId')
    }
    const book = await this.readBookByBookIdRepository.read(bookId)
    if(!book || book.userId!=userId){
      return null
    }
    return book
  }
}