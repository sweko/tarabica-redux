import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  value: number;

  title = 'My #Tarabica18 app';

  valueChanged(value) {
    this.value = value;
  }

}
