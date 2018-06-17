import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthorizationComponent } from './authorization/authorization.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AuthorizationComponent]
})
export class AuthorizationModule { }
