import { Book } from "../../../domain/models"
import { ICreateBookByUserIdUseCase } from "../../../domain/usecases/book"
import { ICreateBookRepository } from "../../../infra/repositories/create-book-repository"
import { MissingParamError } from "../../../utils/errors"

export default class CreateBookByUserId implements ICreateBookByUserIdUseCase{
  constructor (private readonly createBookRepository: ICreateBookRepository) {}

  async create (book: Book): Promise<Book | null>{
    if (!book.title) {
      throw new MissingParamError('title')
    }
    if (!book.description) {
      throw new MissingParamError('description')
    }
    if (!book.userId) {
      throw new MissingParamError('userId')
    }
    const bookResponse = await this.createBookRepository.create(book)
    if (bookResponse) {
      return bookResponse
    }
    return null
  }
}