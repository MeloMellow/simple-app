
export interface IDeleteBookByBookIdRepository{
  delete(bookId: String): Promise<boolean | null>
}