import { Injectable } from '@angular/core';

import { ListItem } from '../model/list-item.model';

@Injectable({
  providedIn: 'root'
})

export class ListService {

  constructor() { }

  public getListItems(): ListItem[] {
    return [
      {
        id: 1,
        title: 'Title 1',
        duration: 1,
        date: new Date('05.15.2018'),
        description: 'Description 1'
      }, {
        id: 2,
        title: 'Title 2',
        duration: 1,
        date: new Date(),
        description: 'Description 2'
      }, {
        id: 3,
        title: 'Title 3',
        duration: 3,
        date: new Date('07.01.2018'),
        description: 'Description 3'
      }, {
        id: 4,
        title: 'Title 1',
        duration: 1,
        date: new Date('06.29.2018'),
        description: 'Angular is running in the development mode. Call enableProdMode() to enable the production mode' +
                      'Angular is running in the development mode. Call enableProdMode() to enable the production mode' +
                      'Angular is running in the development mode. Call enableProdMode() to enable the production mode'
      }, {
        id: 5,
        title: 'Title 2',
        duration: 1,
        date: new Date('07.05.2018'),
        description: 'Description 2'
      }, {
        id: 6,
        title: 'Title 3',
        duration: 3,
        date: new Date('06.15.2018'),
        description: 'Description 3'
      }
    ];
  }
}
