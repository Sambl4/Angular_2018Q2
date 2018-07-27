import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from '../../share/share.module';



import { DateInputComponent } from './inputs/date-input/date-input.component';
import { DurationInputComponent } from './inputs/duration-input/duration-input.component';
import { MultiInputComponent } from './inputs/multi-input/multi-input.component';
import { ValidationInputComponent } from './inputs/validation-input/validation-input.component';

@NgModule({
  imports: [
    ShareModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DateInputComponent,
    DurationInputComponent,
    MultiInputComponent,
    ValidationInputComponent
  ],
  exports: [
    DateInputComponent,
    DurationInputComponent,
    MultiInputComponent,
    ValidationInputComponent
  ]
})
export class InfrastructureModule { }
