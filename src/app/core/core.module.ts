import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    BreadcrumbComponent,
    FooterComponent,
    ModalComponent
  ],
  exports: [
    HeaderComponent,
    BreadcrumbComponent,
    FooterComponent,
    ModalComponent
  ]
})
export class CoreModule { }
