import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralContainerComponent } from './general-container';
import { DisplayContainerComponent } from './display-container';
import { ButtonContainerComponent } from './button-container';
import { AddButtonComponent } from './add-button';
import { SubtractButtonComponent } from './subtract-button';
import { ShowNumberComponent } from './show-number';
import { NavigationBarComponent } from './navigation-bar';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GeneralContainerComponent,
    DisplayContainerComponent,
    ButtonContainerComponent,
    AddButtonComponent,
    SubtractButtonComponent,
    ShowNumberComponent,
    NavigationBarComponent
  ],
  exports: [
    GeneralContainerComponent,
    DisplayContainerComponent,
    ButtonContainerComponent,
    AddButtonComponent,
    SubtractButtonComponent,
    ShowNumberComponent,
    NavigationBarComponent
  ]
})
export class ComponentsModule { }
