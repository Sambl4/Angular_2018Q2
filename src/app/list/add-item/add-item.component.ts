import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ListItem } from '../../model/list-item.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AddItemComponent implements OnInit {
@Input() public listItem: ListItem;
@Output() cancelEditItem: EventEmitter<ListItem> = new EventEmitter<ListItem>();
@Output() saveEditItem: EventEmitter<ListItem> = new EventEmitter<ListItem>();
  constructor() { }

  ngOnInit() {
  }

  cancelEdit(listItem: ListItem) {
    this.cancelEditItem.emit(listItem);
  }

  saveEdit(listItem: ListItem) {
    this.saveEditItem.emit(listItem);
  }

  changedDuration(duration: number) {
    this.listItem.duration = duration;
  }
}
