import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
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
// public result: Observable<boolean>;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    // this.result.subscribe();
  }

  cancelEdit(listItem: ListItem) {
    // this.result.subscribe(() => false)
    this.cancelEditItem.emit(listItem);
  }

  saveEdit(listItem: ListItem) {
    // this.result.subscribe(() => true)
    this.saveEditItem.emit(listItem);
  }
}
