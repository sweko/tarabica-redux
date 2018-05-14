import { Component, OnInit, Input } from '@angular/core';
import { StateManager } from 'src/app/services/state-manager';

@Component({
  selector: 'show-number',
  templateUrl: './show-number.component.html',
  styleUrls: ['./show-number.component.css']
})
export class ShowNumberComponent implements OnInit {

  value: number;

  constructor(private stateManager: StateManager) { 
    this.stateManager.registerListener(() => this.displayStateValue());
  }

  ngOnInit() {
    this.displayStateValue();       
  }

  displayStateValue() {
    const state = this.stateManager.getState();
    this.value = state.value;
  }



}
