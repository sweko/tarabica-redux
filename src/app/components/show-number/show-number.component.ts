import { Component, OnInit, Input } from '@angular/core';
import { StateManager } from '../../services/state-manager';

@Component({
  selector: 'show-number',
  templateUrl: './show-number.component.html',
  styleUrls: ['./show-number.component.css']
})
export class ShowNumberComponent implements OnInit {

  value: number;

  constructor(private stateManager: StateManager) { }

  ngOnInit() {
    const state = this.stateManager.getState();
    this.value = state.value;
  }

  refresh(){
    const state = this.stateManager.getState();
    this.value = state.value;    
  }

}
