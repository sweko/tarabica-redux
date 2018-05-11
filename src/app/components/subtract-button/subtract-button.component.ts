import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateManager, ActionType } from '../../services/state-manager';
import { Action } from 'rxjs/internal/scheduler/Action';

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
    this.stateManager.executeAction({ type: ActionType.Decrement })
  }

}
