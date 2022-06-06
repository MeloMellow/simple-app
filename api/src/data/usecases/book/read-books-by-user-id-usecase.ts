import { Book } from "../../../domain/models"
import { IReadBooksByUserIdRepository } from "../../../domain/repositories/read-books-by-user-id-repository"
import { IReadBooksByUserIdUseCase } from "../../../domain/usecases/book"
import { MissingParamError } from "../../../utils/errors"

export default class ReadBooksByUserIdUseCase implements IReadBooksByUserIdUseCase{
  constructor (private readonly readBooksByUserIdRepository: IReadBooksByUserIdRepository) {}

  async read (userId: string): Promise<Array<Book> | null>{
    if (!userId) {
      throw new MissingParamError('userId')
    }
    const books = await this.readBooksByUserIdRepository.read(userId)
    if(!books){
      return null
    }
    return books
  }
}