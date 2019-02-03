import { Component } from '@angular/core';

import { DynamicControl } from '../../models/dynamic-control';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent extends DynamicControl { }
