import { Component, OnInit } from '@angular/core';
import { IBook } from '../models/IBook';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  books: IBook[] = [
  {cover: '../assets/asset-0.png', title: 'Xây dựng RESTful API với Nodejs', linkDown: 'laptrinhvien.io'},
  {cover: '../assets/asset-1.png', title: 'Giáo trình Front-End cơ bản', linkDown: 'laptrinhvien.io'},
  {cover: '../assets/asset-2.png', title: 'Lập trình C++', linkDown: 'laptrinhvien.io'},
  {cover: '../assets/asset-3.png', title: 'Angular cơ bản', linkDown: 'laptrinhvien.io'},
  {cover: '../assets/asset-4.png', title: 'Xây dựng RESTful API với Nodejs', linkDown: 'laptrinhvien.io'},
  {cover: '../assets/asset-5.png', title: 'mongoDB', linkDown: ''}
];
  stage: boolean;
  list: boolean;
  gird: boolean;
  searchBook: string;
  constructor() { }

  ngOnInit() {
    this.gird = true;
    this.list = false;
    this.stage = true;
    this.searchBook = '';
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
