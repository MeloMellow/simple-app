import { Book } from "../../domain/models";
import { ICreateBookRepository } from "../../domain/repositories/create-book-repository";
import { DataSourceOperation, UserEntity, BookEntity } from "./typeorm";

export class CreateBookRepository implements ICreateBookRepository {
  async create(book: Book): Promise<Book | null> {
    await DataSourceOperation(async (DataSource) => {
      const userRepository = DataSource.getRepository(UserEntity);
      if (!userRepository) {
        return;
      }
      let userData = await userRepository.findOne({
        where: {
          id: book.userId,
        },
        relations: ["books"],
      });
      if (!userData) {
        return;
      }
      let bookData = new BookEntity();
      bookData.date = book.date;
      bookData.description = book.description;
      bookData.title = book.title;
      await DataSource.manager.save(bookData);
      userData.books.push(bookData);
      await userRepository.save(userData);
      book.id = bookData.id;
    });

    if (!book.id) {
      return null;
    }
    return book;
  }
}
