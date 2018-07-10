import { Component, OnInit, Output, NgModule, EventEmitter } from '@angular/core';

import { ListItem } from '../../model/list-item.model';
import { ListService } from '../list.service';
import { SearchByTitlePipe } from '../../share/pipe/my-search.pipe';

const SEARCH_BY_FIELD: string = 'title';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
  providers: [ SearchByTitlePipe ]
})

export class SearchbarComponent implements OnInit {
  @Output() filteredArray: EventEmitter<ListItem[]> = new EventEmitter<ListItem[]>();
  searchValue: string;
  private searchedArray: ListItem[] = [];

  constructor(private searchByTitlePipe: SearchByTitlePipe, private listService: ListService) { }

  ngOnInit() {
  }

  search() {
    let filteredByTitle: ListItem[];
    this.searchedArray = this.listService.getOriginalListItems();

    (this.searchValue && this.searchValue.length) ?
      filteredByTitle = this.searchByTitlePipe.transform(this.searchedArray, SEARCH_BY_FIELD, this.searchValue) :
      filteredByTitle = this.listService.getOriginalListItems();

    this.filteredArray.emit(filteredByTitle);
  }
}
