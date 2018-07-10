import { Component, OnInit, OnChanges } from '@angular/core';

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
    this.listItems = this.listService.getRenderingItems();
  }

  // ngOnChanges() {
  //   this.listItems = this.listService.getRenderingItems();
  // }

  deleteItemById(id: number) {
    console.log(id);
  }

  loadMore() {
    console.log('load more items');
  }

}
