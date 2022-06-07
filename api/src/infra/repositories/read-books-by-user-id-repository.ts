import { Book } from "../../domain/models";
import { IReadBooksByUserIdRepository } from "../../domain/repositories/read-books-by-user-id-repository";
import { DataSourceOperation, UserEntity } from "./typeorm";

export class ReadBooksByUserIdRepository
  implements IReadBooksByUserIdRepository
{
  async read(userId: string): Promise<Book[] | null> {
    if (!userId) {
      return null;
    }
    let books: Array<Book> | null = null;
    await DataSourceOperation(async (DataSource) => {
      const userRepository = DataSource.getRepository(UserEntity);
      if (!userRepository) {
        return;
      }
      const userData: UserEntity | null = await userRepository.findOne({
        where: {
          id: userId,
        },
        relations: ["books"],
      });
      if (!userData) {
        return;
      }
      if (!books) {
        books = [];
      }
      userData.books.map((bookData) => {
        if (!books) {
          //This if shouldnt exist
          books = [];
        }
        books.push({
          id: bookData.id,
          userId: userId,
          title: bookData.title,
          description: bookData.description,
          date: bookData.date,
        });
      });
    });
    return books;
  }
}
