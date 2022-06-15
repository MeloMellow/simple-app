import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Api } from './config/api.config';

export type CreateBookData = {
  title?: string | null;
  description?: string | null;
  date?: Date | null;
};
export type UpdateBookData = {
  id: string;
  title?: string | null;
  description?: string | null;
  date?: Date | null;
};
@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  create(data: CreateBookData) {
    return this.http.post<Book>(`${Api.apiUrl}/api/v1/auth/books`, data);
  }
  update(data: UpdateBookData) {
    return this.http.put<Book>(
      `${Api.apiUrl}/api/v1/auth/books/${data.id}`,
      data
    );
  }
  delete(bookId: string) {
    return this.http.delete<Book>(`${Api.apiUrl}/api/v1/auth/books/${bookId}`);
  }
  get() {
    return this.http.get<Array<Book>>(`${Api.apiUrl}/api/v1/auth/books`);
  }
}
