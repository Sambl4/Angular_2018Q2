import { Component, OnInit, Output, NgModule, EventEmitter } from '@angular/core';
import { Observable, interval, of, Subscription, BehaviorSubject } from 'rxjs';

import { ListItem } from '../../model/list-item.model';
import { ListService } from '../list.service';
import { SearchByTitlePipe } from '../../share/pipe/my-search.pipe';

// const SEARCH_BY_FIELD: string = 'title';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
  providers: [ SearchByTitlePipe ]
})

export class SearchbarComponent implements OnInit {
  @Output() filteredArray: EventEmitter<ListItem[]> = new EventEmitter<ListItem[]>();
  @Output() searchedValue: EventEmitter<string> = new EventEmitter<string>();
  public searchValue: string;
  public isSearched: boolean;
  // private searchedArray: ListItem[] = [];

  constructor(private searchByTitlePipe: SearchByTitlePipe, private listService: ListService) { }

  ngOnInit() {
    this.isSearched = false;
  }

  changeSearchValue(value) {
    this.searchValue = value;
    this.isSearched = true;
    if (this.searchValue && this.searchValue.length > 3) {
      this.searchedValue.emit(this.searchValue);
    }
  }

  searchingReset() {
    this.isSearched = false;
    this.searchValue = '';
    this.searchedValue.emit(this.searchValue);
  }


  search() {
    // let filteredByTitle: ListItem[];
    // this.searchedArray = this.listService.getOriginalListItems();

    // (this.searchValue && this.searchValue.length) ?
    //   filteredByTitle = this.searchByTitlePipe.transform(this.searchedArray, SEARCH_BY_FIELD, this.searchValue) :
    //   filteredByTitle = this.listService.getOriginalListItems();

    // this.filteredArray.emit(filteredByTitle);

    // if (this.searchValue && this.searchValue.length) {
      // this.searchedValue.emit(this.searchValue);
    // }
  }
}
