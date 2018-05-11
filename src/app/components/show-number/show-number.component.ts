import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { StateManager, Unlistener } from '../../services/state-manager';

@Component({
  selector: 'show-number',
  templateUrl: './show-number.component.html',
  styleUrls: ['./show-number.component.css']
})
export class ShowNumberComponent implements OnInit, OnDestroy {

  private unlisten: Unlistener
  value: number;

  constructor(private stateManager: StateManager) {
    this.unlisten = this.stateManager.registerListener(() => this.displayStateValue());
  }

  ngOnInit() {
    this.displayStateValue();
  }

  ngOnDestroy(){
    this.unlisten();
  }

  displayStateValue() {
    const state = this.stateManager.getState();
    this.value = state.value;
  }

}
