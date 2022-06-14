import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { share } from 'rxjs/internal/operators/share';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';
import { notify } from 'src/app/swal-notification';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css'],
})
export class CreateBookComponent implements OnInit {
  @Output() notifyParent = new EventEmitter();

  @Input()
  set books(book: Array<Book>) {
    this._books = book;
  }
  private _books: Array<Book> = [];

  bookForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', Validators.required),
    date: new FormControl(null, Validators.required),
  });

  constructor(public booksService: BooksService, public router: Router) {}

  async onSubmit() {
    const request = this.booksService.create(this.bookForm.value).pipe(share());
    request.subscribe({
      next: (book) => {
        notify.bookAdded();
        this._books.push(book);
        this.notifyParent.emit();
        this.bookForm.reset();
      },
    });
  }

  ngOnInit(): void {}
}
