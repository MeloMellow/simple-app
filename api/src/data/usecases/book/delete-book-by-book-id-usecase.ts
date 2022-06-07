import { IDeleteBookByBookIdRepository } from "../../../domain/repositories/delete-book-by-book-id-repository"
import { IReadBookByBookIdRepository } from "../../../domain/repositories/read-book-by-book-id-repository"
import { IDeleteBookByBookIdUseCase } from "../../../domain/usecases/book"
import { MissingParamError } from "../../../utils/errors"

export default class DeleteBookByBookIdUseCase implements IDeleteBookByBookIdUseCase{
  constructor (
    private readonly deleteBookByBookIdRepository: IDeleteBookByBookIdRepository,
    private readonly readBookByBookIdRepository: IReadBookByBookIdRepository) 
  {}

  async delete (userId: string, bookId: string): Promise<boolean | null>{
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
    const response = await this.deleteBookByBookIdRepository.delete(bookId)
    return response
  }
}