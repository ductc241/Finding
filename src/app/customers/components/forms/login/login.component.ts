import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service'
// import { map } from 'rxjs/operators'
// import { Observable } from 'rxjs'

@Component({
  	selector: 'app-login',
  	templateUrl: './login.component.html',
  	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  	constructor(private authService: AuthService) { }

  	ngOnInit(): void {
  	}

  	loginForm = new FormGroup({
  	 	username: new FormControl('', [
  	 		 Validators.required
  	 	]),
    	password: new FormControl(),
  	})

  	onSubmit() {
      this.authService.login(this.loginForm.value).subscribe(data => {
        console.log(data)
      })
  	}

  	get username() { return this.loginForm.controls.username }
}