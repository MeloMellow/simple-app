import { IDeleteBookByBookIdRepository } from "../../domain/repositories/delete-book-by-book-id-repository";
import { BookEntity, DataSourceOperation } from "./typeorm";

export class DeleteBookByBookIdRepository
  implements IDeleteBookByBookIdRepository
{
  async delete(bookId: string): Promise<boolean | null> {
    if (!bookId) {
      return null;
    }
    let operationSuccess = false;
    await DataSourceOperation(async (DataSource) => {
      const bookRepository = DataSource.getRepository(BookEntity);
      if (!bookRepository) {
        return;
      }
      let bookData = await bookRepository.findOne({
        where: {
          id: bookId,
        },
        relations: ["user"],
      });
      if (!bookData) {
        return;
      }
      await DataSource.manager.remove(bookData);
      operationSuccess = true;
    });
    return operationSuccess;
  }
}
