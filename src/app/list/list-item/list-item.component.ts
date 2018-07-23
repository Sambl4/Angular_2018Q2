import { Component, OnInit, Input, Output, EventEmitter,
        ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs'

import { ListItem } from '../../model/list-item.model';
import { AddItemComponent } from '../add-item/add-item.component';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListItemComponent implements OnInit {
  @Input() public listItem: ListItem;
  @Output() deleteItemById: EventEmitter<ListItem> = new EventEmitter<ListItem>();
  @Output() updateItem: EventEmitter<ListItem> = new EventEmitter<ListItem>();

  public isMyRate = false; // will be received from user service
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  deleteItem(Item: ListItem) {
    this.deleteItemById.emit(Item);
  }

  saveEditItem(item: ListItem) {
    this.updateItem.emit(item);
    item.editMode = !item.editMode;
  }

  editItem(item: ListItem) {
    item.editMode = !item.editMode;
  }

  cancelEditItem(item: ListItem) {
    if(!item.title && !item.description) {
      this.deleteItem(item);
    }
    item.editMode = !item.editMode;
    // this.refresh();
  }

  refresh() {
    this.cd.detectChanges();
  }
}
