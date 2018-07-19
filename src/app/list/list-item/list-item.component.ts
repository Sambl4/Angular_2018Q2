import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ListItem } from '../../model/list-item.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})

export class ListItemComponent implements OnInit {
  @Input() public listItem: ListItem;
  @Output() deleteItemById: EventEmitter<ListItem> = new EventEmitter<ListItem>();
  @Output() updateItem: EventEmitter<ListItem> = new EventEmitter<ListItem>();

  public isMyRate = false; // will be received from user service
  constructor() { }

  ngOnInit() {
  }

  deleteItem(listItem: ListItem) {
    this.deleteItemById.emit(listItem);
  }

  saveItem(item: ListItem) {
    this.updateItem.emit(item);
    return item.editMode = !item.editMode;
  }

  editItem(item: ListItem) {
    return item.editMode = !item.editMode;
  }
}
