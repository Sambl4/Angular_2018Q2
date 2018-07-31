import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import * as _ from 'lodash';
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
  public routeParams: any = {};

  private deletedID: number;

  constructor( private listService: ListService,
               private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit() {
    this.listItems = this.listService.getOriginalListItems();

    // this.route.params.subscribe((data) => {
    //   this.routeParams.id = item.id;
    // });
    this.route.data.subscribe((data) => {
      console.log(data)
    });
  }

  filteredArray(value: ListItem[]) {
    this.listItems = value;
  }

  deleteItemById(listItem: ListItem) {
    const deletedTitle = listItem.title ? listItem.title : 'New';
    this.deletedID = listItem.id;
    this.options = {
      title: 'Delete course.',
      message: 'Do you really want to delete ' + deletedTitle + ' course? '
    };
  }

  confirmResult(result: boolean) {
    result ? this.listService.removeListItemById(this.deletedID) : null;
  }

  updateItem(item: ListItem) {
    this.listService.updateItem(item);
  }

  addNewCourse() {
    this.listService.createListItem();
    this.router.navigate(['../coursesList', 'new']);
  }

  loadMore() {
    console.log('load more items');
  }

  setUrlParams(item: ListItem) {
    // this.route.params.subscribe((data) => {
    //   this.routeParams.id = item.id;
    // })
    this.router.navigate(['../coursesList', item.id]);
  }
}
