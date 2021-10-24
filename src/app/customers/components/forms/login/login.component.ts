import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router'

import { AuthService } from '../../../../services/auth.service'
import { UserService } from '../../../../services/user.service'
import { uniqueEmail } from '../../../../sharing/validate/uniqueUserEmail'

// import { map } from 'rxjs/operators'
// import { Observable } from 'rxjs'

@Component({
  	selector: 'app-login',
  	templateUrl: './login.component.html',
  	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  	constructor(
      private authService: AuthService,
      private userService: UserService,
      private router: Router
    ) { }

  	ngOnInit(): void {
  	}

  	loginForm = new FormGroup({
  	 	username: new FormControl('',{
        validators: [
          Validators.required,
          Validators.pattern('^[a-z][a-z0-9\]{4,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$'),
        ],
        asyncValidators: [
          // uniqueEmail(this.userService)
        ],
        updateOn: 'blur'
  	 	}),
    	password: new FormControl('', [
        Validators.required,
      ])
  	})

  	onSubmit() {
      this.authService.login(this.loginForm.value).subscribe(data => {
        console.log(data)
      	const { token } = data

        if(token){
          localStorage.setItem('token', JSON.stringify(token))
          this.router.navigate(['user/dashboard'])
        }
      })
  	}

  	get username() { return this.loginForm.controls.username }
  	get password() { return this.loginForm.controls.password }
}