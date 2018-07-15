import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ListItem } from '../../model/list-item.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})

export class ListItemComponent implements OnInit {
  @Input() public listItem: ListItem;
  @Output() deleteItemById: EventEmitter<number> = new EventEmitter<number>();
  @Output() updateItem: EventEmitter<ListItem> = new EventEmitter<ListItem>();

  public isMyRate = false; // will be received from user service
  constructor() { }

  ngOnInit() {
  }

  deleteItem(id: number) {
    this.deleteItemById.emit(id);
  }

  saveItem(item: ListItem) {
    this.updateItem.emit(item);
  }

  editItem(item: ListItem) {
    return item.editMode = !item.editMode;
  }
}
