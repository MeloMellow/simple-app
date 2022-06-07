import { Book } from "../models";

export interface IReadBooksByUserIdRepository {
  read(userId: string): Promise<Array<Book> | null>;
}
