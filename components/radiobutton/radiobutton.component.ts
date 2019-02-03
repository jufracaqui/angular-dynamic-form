import { Component, OnInit } from '@angular/core';

import { DynamicControl } from '../dynamic-form/models/dynamic-control';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html'
})
export class RadiobuttonComponent extends DynamicControl implements OnInit { }
