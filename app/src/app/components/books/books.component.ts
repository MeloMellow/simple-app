import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Book } from 'src/app/models/book';

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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {}
}
