import { Component, OnInit } from '@angular/core';

import { DynamicControl } from '../dynamic-form/models/dynamic-control';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html'
})
export class DateComponent extends DynamicControl implements OnInit { }
