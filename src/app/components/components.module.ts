import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralContainerComponent } from './general-container/general-container.component';
import { DisplayContainerComponent } from './display-container/display-container.component';
import { ButtonContainerComponent } from './button-container/button-container.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { SubtractButtonComponent } from './subtract-button/subtract-button.component';
import { ShowNumberComponent } from './show-number/show-number.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GeneralContainerComponent, DisplayContainerComponent, ButtonContainerComponent, AddButtonComponent, SubtractButtonComponent, ShowNumberComponent, NavigationBarComponent]
})
export class ComponentsModule { }
