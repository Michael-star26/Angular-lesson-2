import{AbstractControl,
} from '@angular/forms';

export function customValidators(control:AbstractControl):boolean {
    return control.value.password===control.value.cPassword?true:false
};