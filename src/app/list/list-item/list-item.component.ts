import { Component, OnInit, Input, Output, EventEmitter,
        ChangeDetectionStrategy } from '@angular/core';
import { cloneDeep } from 'lodash';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

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

  public routeParams: any = {};
  public isMyRate = false; // will be received from user service
  constructor(
    // private router: Router
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.route.params.subscribe(next(data) => {
    //   this.routeParams.id = data['id'];
    //   this.routeParams.email = data['email'];
    // });
    // this.route.data.subscribe(next(data) )
  }

  deleteItem(Item: ListItem) {
    this.deleteItemById.emit(Item);
  }

  saveEditItem(item: ListItem) {
    item.editMode = !item.editMode;
    const editModeItem: ListItem = cloneDeep(item);
    this.listItem = editModeItem;
    this.updateItem.emit(editModeItem);
  }

  editItem(item: ListItem) {
    const editModeItem: ListItem = cloneDeep(item);
    // this.router.navigate(['../coursesList']);
    editModeItem.editMode = !this.listItem.editMode;
    this.listItem = editModeItem;
  }

  cancelEditItem(item: ListItem) {
    if (!item.title && !item.description) {
      this.deleteItem(item);
    }
    const editModeItem: ListItem = cloneDeep(item);
    editModeItem.editMode = !this.listItem.editMode;
    this.listItem = editModeItem;
  }
}
