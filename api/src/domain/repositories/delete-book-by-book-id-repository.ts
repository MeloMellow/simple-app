
export interface IDeleteBookByBookIdRepository{
  delete(bookId: string): Promise<boolean | null>
}