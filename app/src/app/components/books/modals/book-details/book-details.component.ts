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

  getBookDateFormattedToView(date?: Date): string {
    if (!date) {
      return '';
    }
    let dateString: string;
    if (date.toString().includes('T')) {
      dateString = date.toString().split('T')[0];
    } else {
      dateString = date.toString().split(' ')[0];
    }
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
