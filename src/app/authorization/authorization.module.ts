import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthorizationComponent } from './authorization/authorization.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ShareModule
  ],
  declarations: [
    AuthorizationComponent
  ]
})
export class AuthorizationModule { }
