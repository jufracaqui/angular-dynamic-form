import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldConfig } from '../interfaces/field-config.interface';

export class DynamicControl implements OnInit {
  field: FieldConfig;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
