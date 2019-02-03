import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from '../../material.module';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DateComponent } from './components/date/date.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { InputComponent } from './components/input/input.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { SelectComponent } from './components/select/select.component';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';

const components = [
 InputComponent,
 ButtonComponent,
 SelectComponent,
 DateComponent,
 RadiobuttonComponent,
 CheckboxComponent
];

const modules = [
 BrowserModule,
 FormsModule,
 ReactiveFormsModule,
 MaterialModule
];

@NgModule({
 declarations: [
  DynamicFieldDirective,
  DynamicFormComponent,
  ...components
 ],
 imports: [...modules],
 exports: [
  DynamicFieldDirective,
  DynamicFormComponent,
  ...components
 ],
 entryComponents: [...components]
})

export class DynamicFormModule { }
