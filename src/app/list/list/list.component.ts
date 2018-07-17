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
  public options: any;

  private deletedID: number;

  constructor( private listService: ListService) { }

  ngOnInit() {
    this.listItems = this.listService.getOriginalListItems();
  }

  filteredArray(value: ListItem[]) {
    this.listItems = value;
  }

  deleteItemById(listItem: ListItem) {
    this.deletedID = listItem.id;
    this.options = {
      title: 'Delete course.',
      message: 'Do you really want to delete ' + listItem.title + ' course? '
    }
  }

  confirmResult(result: boolean) {
    result ? this.listService.removeListItemById(this.deletedID) : null;
  }

  updateItem(item: ListItem) {
    this.listService.updateItem(item);
  }

  addNewCourse() {
    this.listService.createListItem();
  }

  loadMore() {
    console.log('load more items');
  }

}
