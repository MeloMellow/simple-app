import { Book } from "../../../domain/models"
import { IReadBooksByUserIdUseCase } from "../../../domain/usecases/book"
import { IReadBooksByUserIdRepository } from "../../../infra/repositories/read-books-by-user-id-repository"
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