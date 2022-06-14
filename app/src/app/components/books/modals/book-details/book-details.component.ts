import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  @Input()
  set book(book: Book | null) {
    this._book = book;
  }
  public _book: Book | null = null;

  constructor() {}

  getBookDateFormatted(date?: Date): string {
    if (!date) {
      return '';
    }
    let dateString = date.toString();
    const response =
      dateString.split('-')[1] +
      '/' +
      dateString.split('-')[2] +
      '/' +
      dateString.split('-')[0];
    return response;
  }

  ngOnInit(): void {}
}
