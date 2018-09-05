import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AuthReducer } from './authorization.reducer';
// import { authInitialState } from './auth.state';

@NgModule({
    imports: [
      CommonModule,
      // StoreModule.forFeature('auth', AuthReducer, {
      //   initialState: authInitialState
      // })
      StoreModule.forFeature('auth', AuthReducer)
    ],
    providers: []
  })
  export class AuthStoreModule {}