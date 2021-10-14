import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';

@Component({
  	selector: 'app-registry',
  	templateUrl: './registry.component.html',
  	styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

  	constructor() { }

  	ngOnInit(): void {
  	}

  	registryForm = new FormGroup({
  	 	name: new FormControl('', [
  	 		Validators.required,
  	 		Validators.pattern('^[a-z][a-z0-9\]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$')
  	 	]),
    	email: new FormControl(),
    	password: new FormControl(),
    	confirmPassword: new FormControl(),
    	phone: new FormControl()
  	})

  	onSubmit() {
  		console.log(this.registryForm.value);
  	}

  	get name() { return this.registryForm.controls.name }

}
