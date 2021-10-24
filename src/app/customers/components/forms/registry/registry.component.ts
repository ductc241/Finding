import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router'

import { AuthService } from '../../../../services/auth.service'
import { UserService } from '../../../../services/user.service'
import { confirmValue } from '../../../../sharing/validate/confirmValue'
import { uniqueEmail } from '../../../../sharing/validate/uniqueUserEmail'

@Component({
  	selector: 'app-registry',
  	templateUrl: './registry.component.html',
  	styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

  	constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authService: AuthService,
      private userService: UserService
    ) { }

  	ngOnInit(): void {
  	}

  	registryForm = this.formBuilder.group({
  	 	name: new FormControl(''),
    	username: new FormControl('', {
        validators: [
          Validators.required,
          Validators.pattern('^[a-z][a-z0-9\]{4,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$'),
        ],
        asyncValidators: [
          uniqueEmail(this.userService)
        ],
        updateOn: 'blur'
      }),
    	password: new FormControl('', [
  			Validators.required
  		]),
    	confirm: new FormControl('', {
        validators: [
          Validators.required,
        ],
        updateOn: 'blur'
      }),
    	phone: new FormControl('', [
  			Validators.required
  		])
  	}, {
      validators: this.passwordMatchValidator('password', 'confirm')
    })


  	onSubmit() {      
      // console.log(this.registryForm.value)
      this.authService.register(this.registryForm.value).subscribe(data => {
        console.log(data)
        const isConfirm = confirm('Đăng ký thành công, chuyển trang ???')

        if(isConfirm){
          this.router.navigate(['login'])
        }
      })
  	}

    passwordMatchValidator(controlName: String, matchingControlName: String) {
      return (group: FormGroup) => {
         const password = group.controls[`${controlName}`]
         const confirm = group.controls[`${matchingControlName}`]

         if(confirm.errors && !confirm.errors.mustMatch){
          return
         }

         if(confirm.value !== password.value){
          confirm.setErrors({mustMatch: true})
         }else{
          confirm.setErrors(null)
         }
      }
    }

    get name() { return this.registryForm.controls.name }
    get username() { return this.registryForm.controls.username }
    get password() { return this.registryForm.controls.password }
    get confirm() { return this.registryForm.controls.confirm }
    get phone() { return this.registryForm.controls.phone }
  	get f() { return this.registryForm.controls }

}
