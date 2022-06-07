import { Book } from "../../domain/models";
import { IUpdateBookByBookIdRepository } from "../../domain/repositories/update-book-repository";
import { BookEntity, DataSourceOperation } from "./typeorm";

export class UpdateBookByBookIdRepository
  implements IUpdateBookByBookIdRepository
{
  async update(book: Book): Promise<Book | null> {
    if (!book.id) {
      return null;
    }
    let bookResponse: Book | null = null;
    await DataSourceOperation(async (DataSource) => {
      const bookRepository = DataSource.getRepository(BookEntity);
      if (!bookRepository) {
        return;
      }
      let bookData: BookEntity | null = await bookRepository.findOne({
        where: {
          id: book.id,
        },
        relations: ["user"],
      });
      if (!bookData) {
        return;
      }
      bookData.date = book.date;
      bookData.description = book.description;
      bookData.title = book.title;
      await bookRepository.save(bookData);
      bookResponse = book;
    });
    return bookResponse;
  }
}
