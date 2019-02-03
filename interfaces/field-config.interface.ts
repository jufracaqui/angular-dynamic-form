import { Validator } from './validator.interface';

export interface FieldConfig {
 label?: string;
 name?: string;
 inputType?: string;
 options?: string[];
 collections?: any;
 type: string;
 value?: any;
 validations?: Validator[];
}
