import { Component, OnInit } from '@angular/core';

import { ListItem } from '../../model/list-item.model';

import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  public listItems: ListItem[] = [];

  constructor( private listService: ListService) { }

  ngOnInit() {
    this.listItems = this.listService.getOriginalListItems();
  }

  filteredArray(value: ListItem[]) {
    this.listItems = value;
  }

  deleteItemById(id: number) {
    console.log(id);
  }

  updateItem(item: ListItem) {
    this.listService.updateItem(item);
  }

  addNewCourse() {

  }

  loadMore() {
    console.log('load more items');
  }

}
