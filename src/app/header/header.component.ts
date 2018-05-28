import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _bookService: BookService) { }

  ngOnInit() {
  }
  search(kw) {
    this._bookService.searchBook(kw);
  }
}
