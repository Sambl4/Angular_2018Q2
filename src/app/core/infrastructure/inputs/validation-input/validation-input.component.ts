/* tslint:disable: linebreak-style */

import { Component, OnInit, Input, EventEmitter } from '@angular/core';

import {FormControl, FormGroup, Validators, FormControlName} from '@angular/forms';

@Component({
  selector: 'app-validation-input',
  templateUrl: './validation-input.component.html',
  styleUrls: ['./validation-input.component.css']
})
export class ValidationInputComponent implements OnInit {
@Input() public inputTitle: string;
@Input() public minlength: number;
@Input() public property: any;
@Input() public options: any;

form = new FormGroup({
  first: new FormControl('Nancy', Validators.minLength(2))
});
  constructor() { }

  ngOnInit() {
    // this.inputTitle = 'myTitle';
    // this.property = 'myname';
  }

  click(v) {
    console.log(v);
  }

get first(): any { return this.form.get('first'); }

onSubmit(): void {
  console.log(this.form.value);  // {first: 'Nancy', last: 'Drew'}
}

setValue() { this.form.setValue({first: 'Carson', last: 'Drew'}); }


}
