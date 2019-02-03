import { Component, OnInit } from '@angular/core';

import { DynamicControl } from '../dynamic-form/models/dynamic-control';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html'
})
export class CheckboxComponent extends DynamicControl implements OnInit { }
