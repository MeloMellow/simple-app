import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { User } from '../models/user';

export type CreateBookData = {
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
    return this.http.post<Book>(
      'http://localhost:3434/api/v1/auth/books',
      data
    );
  }
}
