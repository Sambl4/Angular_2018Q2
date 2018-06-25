import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  searchValue: string;

  constructor() { }

  ngOnInit() {
  }

  search() {
    if (this.searchValue && this.searchValue.length) {
      console.log(this.searchValue);
      this.searchValue = '';
    }
  }
}
