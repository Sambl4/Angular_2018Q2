import { Injectable } from '@angular/core';

import * as _ from 'lodash';

import { ListItem } from '../model/list-item.model';

const originalListItems:  ListItem[] = [
  {
    id: 1,
    title: 'Title 1',
    duration: 67,
    date: new Date('05.15.2018'),
    description: 'Description 1',
    rate: true,
    editMode: false,
  }, {
    id: 2,
    title: 'Title 2',
    duration: 90,
    date: new Date(),
    description: 'Description 2',
    rate: false,
    editMode: false,
  }, {
    id: 3,
    title: 'Title 3',
    duration: 15,
    date: new Date('07.09.2018'),
    description: 'Description 3',
    rate: true,
    editMode: false,
  }, {
    id: 4,
    title: 'Title 1',
    duration: 60,
    date: new Date('06.29.2018'),
    description: 'Angular is running in the development mode. Call enableProdMode() to enable the production mode' +
                  'Angular is running in the development mode. Call enableProdMode() to enable the production mode' +
                  'Angular is running in the development mode. Call enableProdMode() to enable the production mode',
    rate: false,
    editMode: false,
  }, {
    id: 5,
    title: 'Title 2',
    duration: 125,
    date: new Date('07.05.2018'),
    description: 'Description 2',
    rate: false,
    editMode: true,
  }, {
    id: 6,
    title: 'Title 3',
    duration: 45,
    date: new Date('12.15.2018'),
    description: 'Description 3',
    rate: false,
    editMode: false,
  }
];

let renderingListItems: ListItem[] = [];

@Injectable({
  providedIn: 'root'
})

export class ListService {

  constructor() { }

  public getOriginalListItems(): ListItem[] {
    return originalListItems;
  }

  public getRenderingItems(): ListItem[] {
    return renderingListItems ;
  }

  public setRenderingItems(arr: ListItem[]): void {
    renderingListItems = arr;
  }

  public createListItem(newItem: ListItem) {
    originalListItems.push(newItem);
  }

  public updateItem(item: ListItem) {
    let updatedItem: ListItem = this.getListItemById(item.id);

    console.log('before   ', updatedItem);
    // updatedItem.title = item.title;
    // updatedItem.description = item.description;
    // ip
    updatedItem = item;
    console.log('after   ', updatedItem);
  }

  public removeListItemById() {

  }

  private getListItemById(id: number) {
    return _.find(originalListItems, {id: id})
  }
}
