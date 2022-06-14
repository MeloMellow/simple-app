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

  books: Book[] = [
    {
      id: '485fj03432494325j',
      userId: '43ud98ku395u',
      title: 'Hydrogen',
      description: 'some description',
      date: new Date(),
    },
    {
      id: '485fj094e4325j',
      userId: '43ud98ku395u',
      title: 'HCydrog',
      description: 'some description',
      date: new Date(),
    },
    {
      id: '485fj0dre94325j',
      userId: '43ud98ku395u',
      title: 'Dycsdogen',
      description: 'some description',
      date: new Date(),
    },
    {
      id: '485fj0dr94325j',
      userId: '43ud98ku395u',
      title: 'Hydr',
      description: 'some description',
      date: new Date(),
    },
    {
      id: '485fj0rd3r94325j',
      userId: '43ud98ku395u',
      title: 'Hydrogen',
      description: 'some description',
      date: new Date(),
    },
    {
      id: '485fj09drwe4325j',
      userId: '43ud98ku395u',
      title: 'HGon',
      description: 'some description',
      date: new Date(),
    },
  ];

  dataSource = new MatTableDataSource<Book>(this.books);
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  bookToEdit: Book | null = null;

  constructor(
    private changeDetectorRefs: ChangeDetectorRef,
    private booksService: BooksService
  ) {}

  onBookToEdit(element: Book) {
    this.bookToEdit = { ...element };
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
