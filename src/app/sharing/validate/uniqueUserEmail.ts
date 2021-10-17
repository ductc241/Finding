import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";
import { UserService } from "src/app/services/user.service";
import { map } from 'rxjs/operators';

export function uniqueEmail(userService: UserService): AsyncValidatorFn{
  return (c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return userService.getUserByEmail(c.value).pipe(
      map(users => {
        return users && users.length > 0 ? {uniqueEmail: true} : null;
      })
    )
  }
}