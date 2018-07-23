import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateInputComponent implements OnInit {
// @Input() public inputData: string;

@Input() public inputData: Observable<string>;
  constructor() { }

  ngOnInit() {
  }

}
