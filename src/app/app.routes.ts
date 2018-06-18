import { Route } from '@angular/router';

import { ListComponent } from './list/list/list.component';
import { HomeComponent } from './home/home/home.component';
import { AuthorizationComponent } from './authorization/authorization/authorization.component';

export const ROUTES: Route[] = [
  {
    path: 'coursesList',
    component: ListComponent
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'authorization',
    component: AuthorizationComponent
  }, {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
