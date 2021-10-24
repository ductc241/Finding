import { AbstractControl, ValidationErrors } from "@angular/forms";

export function confirmValue(data: String) {
  	return (c: AbstractControl): ValidationErrors | null => {
  		return  c.value === data ? {confirmValue: true} : null;
  	}
}
