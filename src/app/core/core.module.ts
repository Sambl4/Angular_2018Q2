import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    BreadcrumbComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    BreadcrumbComponent,
    FooterComponent
  ]
})
export class CoreModule { }
