import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { share } from 'rxjs/internal/operators/share';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';
import { notify } from 'src/app/swal-notification';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
})
export class EditBookComponent implements OnInit {
  @Output() notifyParent = new EventEmitter();

  @Input()
  set books(books: Array<Book>) {
    this._books = books;
  }
  private _books: Array<Book> = [];
  @Input()
  set book(book: Book | null) {
    this._book = book;
    this.clearForm();
  }
  public _book: Book | null = null;

  bookForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', Validators.required),
    date: new FormControl(null, Validators.required),
  });

  constructor(public booksService: BooksService, public router: Router) {}

  async onSubmit() {
    if (!this._book || !this._book.id) {
      const err = new Error('Missing bookId');
      console.log(err);
      return;
    }
    const bookData = {
      id: this._book.id,
      title: this.bookForm.value.title,
      description: this.bookForm.value.description,
      date: this.bookForm.value.date,
    };
    const request = this.booksService.update(bookData).pipe(share());
    request.subscribe({
      next: (book) => {
        notify.bookUpdated();
        let bookToBeChanged = this._books.find(
          (bookObj) => bookObj.id == book.id
        );
        if (bookToBeChanged) {
          if (this._book) {
            this._book.title = book.title;
          }
          bookToBeChanged.title = book.title;
          bookToBeChanged.description = book.description;
          bookToBeChanged.date = book.date;
        }
        this.notifyParent.emit();
      },
    });
  }

  clearForm() {
    this.bookForm.reset();
    this.bookForm = new FormGroup({
      title: new FormControl(this._book?.title, [Validators.required]),
      description: new FormControl(
        this._book?.description,
        Validators.required
      ),
      date: new FormControl(
        this.getBookDateFormattedToEdit(this._book?.date),
        Validators.required
      ),
    });
  }

  getBookDateFormattedToEdit(date?: Date): string {
    if (!date) {
      return '';
    }
    let dateString: string;
    if (date.toString().includes('T')) {
      dateString = date.toString().split('T')[0];
    } else {
      dateString = date.toString().split(' ')[0];
    }
    return dateString;
  }

  ngOnInit(): void {}
}
