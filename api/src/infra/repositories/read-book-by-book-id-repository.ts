import { Book } from "../../domain/models";
import { IReadBookByBookIdRepository } from "../../domain/repositories/read-book-by-book-id-repository";
import { BookEntity, DataSourceOperation } from "./typeorm";


export class ReadBookByBookIdRepository implements IReadBookByBookIdRepository{
  async read(bookId: string): Promise<Book | null> {
    if(!bookId){
      return null
    }
    let book: Book | null = null
    await DataSourceOperation(async (DataSource)=>{
      const bookRepository = DataSource.getRepository(BookEntity)
      if(!bookRepository){
        return
      }
      const bookData: BookEntity | null = await bookRepository.findOne({where: {
        id: bookId
      }, relations: ["user"] })
      if(!bookData){
        return
      }
      book = {
        id: bookData.id,
        userId: bookData.user.id,
        title: bookData.title,
        description: bookData.description,
        date: bookData.date
      }
    })
    return book
  }
}