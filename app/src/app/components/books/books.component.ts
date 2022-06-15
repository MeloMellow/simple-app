import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { share } from 'rxjs/internal/operators/share';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/services/books.service';
import { notify } from 'src/app/swal-notification';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'title',
    'details',
    'edit',
    'remove',
  ];

  books: Book[] = [];

  dataSource = new MatTableDataSource<Book>(this.books);
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  bookToEdit: Book | null = null;
  bookToRead: Book | null = null;

  constructor(
    private changeDetectorRefs: ChangeDetectorRef,
    private booksService: BooksService
  ) {
    const request = this.booksService.get().pipe(share());
    request.subscribe({
      next: (booksResponse) => {
        this.books = booksResponse;
        this.refreshTable();
      },
    });
  }

  onBookToEdit(element: Book) {
    this.bookToEdit = { ...element };
  }

  onBookToRead(element: Book) {
    this.bookToRead = element;
  }

  refreshTable() {
    this.dataSource.data = this.books;
    this.changeDetectorRefs.detectChanges();
  }

  onRemove(bookToRemove: Book) {
    notify.deleteBook(() => {
      const request = this.booksService
        .delete(bookToRemove.id || '')
        .pipe(share());
      request.subscribe({
        next: () => {
          const bookFinded = this.books.find(
            (bookObj) => bookObj.id == bookToRemove.id
          );
          if (!bookFinded) {
            const err = new Error('Cant remove book from the table');
            console.log(err);
            return;
          }
          const bookIndex = this.books.indexOf(bookFinded);
          this.books.splice(bookIndex, 1);
          notify.bookDeleted();
          this.refreshTable();
        },
      });
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {}
}
