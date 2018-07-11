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

  public isMyRate = false; // will be received from user service
  constructor() { }

  ngOnInit() {
  }

  deleteItem(id: number) {
    this.deleteItemById.emit(id);
  }
}
