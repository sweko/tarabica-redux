import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateManager } from '../../services/state-manager';

@Component({
  selector: 'subtract-button',
  templateUrl: './subtract-button.component.html',
  styleUrls: ['./subtract-button.component.css']
})
export class SubtractButtonComponent implements OnInit {

  constructor(private stateManager: StateManager) { }

  ngOnInit() {
  }

  subtract() {
    this.stateManager.executeAction({ type: "decrement"});
  }

}
