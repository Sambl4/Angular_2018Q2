import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.css']
})
export class DurationInputComponent implements OnChanges {
@Input() public inputData: number;
@Output() changedDate: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnChanges(inputData) {
    if (inputData && !inputData.firstChange) {
      this.changedDate.emit(this.inputData);
    }
  }

}
