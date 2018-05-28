import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';
import { IBook } from '../models/IBook';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  books: IBook[];
  stage: boolean;
  list: boolean;
  gird: boolean;
  searchBook: string;
  constructor(private _bookService: BookService) { }

  ngOnInit() {
    this.gird = true;
    this.list = false;
    this.stage = true;
    this.searchBook = '';
    this._bookService.getBooks();
    this._bookService.books.subscribe((books) => {
      this.books = books;
    });
  }
  search(kw) {
    this._bookService.searchBook(kw);
  }
  changeToGrid() {
    if (this.gird) {
      this.gird = this.gird;
    } else {
      this.gird = !this.gird;
      this.list = !this.list;
      this.stage = true;
    }
  }
  changeToList() {
    if (this.list) {
      this.list = this.list;
    } else {
      this.list = !this.list;
      this.gird = !this.gird;
      this.stage = false;
    }
  }
}
