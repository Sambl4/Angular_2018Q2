import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthorizationComponent } from './authorization/authorization.component';
import { ShareModule } from '../share/share.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ShareModule,
    FormsModule,
    CoreModule
  ],
  declarations: [
    AuthorizationComponent
  ]
})
export class AuthorizationModule { }
