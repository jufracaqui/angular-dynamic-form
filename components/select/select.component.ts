import { Component } from '@angular/core';

import { DynamicControl } from '../dynamic-form/models/dynamic-control';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html'
})
export class SelectComponent extends DynamicControl { }
