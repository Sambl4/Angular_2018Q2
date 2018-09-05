import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { AuthStoreModule } from './auth/auth.store.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({})
  ],
  declarations: [],
//   exports: [
//     AuthStoreModule
//   ]
})
export class CoreStoreModule { }
