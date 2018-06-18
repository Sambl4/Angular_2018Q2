import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchbarComponent } from './searchbar/searchbar.component';

import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListComponent,
    ListItemComponent,
    SearchbarComponent
  ],
  exports: [
    ListComponent,
    SearchbarComponent
  ]
})
export class ListModule { }
