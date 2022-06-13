import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { share } from 'rxjs/internal/operators/share';
import { Book } from 'src/app/models/book';
import { BooksService, CreateBookData } from 'src/app/services/books.service';
import { notify } from 'src/app/swal-notification';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css'],
})
export class CreateBookComponent implements OnInit {
  @Input()
  set books(book: Array<Book>) {
    this._books = book;
  }
  private _books: Array<Book> = [];

  bookForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', Validators.required),
    date: new FormControl(new Date(), Validators.required),
  });

  constructor(public booksService: BooksService, public router: Router) {}

  onSubmit(book: CreateBookData) {
    const request = this.booksService.create(this.bookForm.value).pipe(share());
    notify.loading();
    request.subscribe({
      next: (book) => {
        notify.close();
      },
      error: (err) => {
        notify.wrongCredentials();
        console.log(err.status);
      },
    });
  }

  ngOnInit(): void {}
}
