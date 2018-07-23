import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';

import { InfrastructureModule } from './infrastructure/infrastructure.module';
// import { DateInputComponent } from './infrastructure/inputs/date-input/date-input.component';
// import { DurationInputComponent } from './infrastructure/inputs/duration-input/duration-input.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    InfrastructureModule
  ],
  declarations: [
    HeaderComponent,
    BreadcrumbComponent,
    FooterComponent,
    ModalComponent,
    // DateInputComponent,
    // DurationInputComponent
  ],
  exports: [
    HeaderComponent,
    BreadcrumbComponent,
    FooterComponent,
    ModalComponent,
    InfrastructureModule
  ]
})
export class CoreModule { }
