import { Route } from '@angular/router';

import { ListComponent } from './list/list/list.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { AddItemComponent } from './list/add-item/add-item.component';
import { HomeComponent } from './home/home/home.component';
import { AuthorizationComponent } from './authorization/authorization/authorization.component';

import { NocontentComponent } from './core/nocontent/nocontent.component';

export const ROUTES: Route[] = [
  {
    path: 'coursesList',
    component: ListComponent,
    data: {'auth_key': 'key'},
    children: [{
      path: ':id',
      component: ListItemComponent
    }, {
      path: 'new',
      component: AddItemComponent
    }]
  },
  //  {
  //   path: 'coursesList/:id',
  //   component: ListItemComponent,
  //   data: {'auth_key': 'key'}
  // },
  //  {
  //   path: 'coursesList/new',
  //   component: AddItemComponent,
  //   data: {'auth_key': 'key'}
  // },
   {
    path: 'home',
    component: HomeComponent,
    data: {'auth_key': 'key'}
  }, {
    path: 'authorization',
    component: AuthorizationComponent,
    data: {'auth_key': 'key'}
  }, {
    path: '',
    redirectTo: 'coursesList',
    pathMatch: 'full',
    data: {'auth_key': 'key'}
  }, {
    path: 'page404',
    component: NocontentComponent
  }, {
    path: '**',
    redirectTo: 'page404'
  }
];
