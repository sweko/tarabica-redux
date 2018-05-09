import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'general-container',
  templateUrl: './general-container.component.html',
  styleUrls: ['./general-container.component.css']
})
export class GeneralContainerComponent implements OnInit {

  actualValue: number = 10;

  @Output() valueChanged: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeValue(value: number) {
    this.actualValue = value;
    this.valueChanged.emit(value);
  }

}
