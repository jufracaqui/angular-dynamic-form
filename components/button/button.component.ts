import { Component } from '@angular/core';
import { DynamicControl } from '../dynamic-form/models/dynamic-control';

@Component({
  selector: 'app-button',
  templateUrl: 'button.component.html'
})

export class ButtonComponent extends DynamicControl { }
