import { Component } from '@angular/core';

import { DynamicControl } from '../dynamic-form/models/dynamic-control';


@Component({
  selector: 'app-input',
  templateUrl: 'input.component.html'
})

export class InputComponent extends DynamicControl { }
