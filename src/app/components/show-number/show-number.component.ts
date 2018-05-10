import { Component, OnInit, Input } from '@angular/core';
import { StateManager } from 'src/app/services/state-manager';

@Component({
  selector: 'show-number',
  templateUrl: './show-number.component.html',
  styleUrls: ['./show-number.component.css']
})
export class ShowNumberComponent implements OnInit {

  @Input() value: number;

  constructor(private stateManager: StateManager) { }

  ngOnInit() {
  }

}
