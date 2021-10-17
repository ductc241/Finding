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
  	 	name: new FormControl(),
    	email: new FormControl('', [
			Validators.required,
			// Validators.email
		]),
    	password: new FormControl('', [
			Validators.required
		]),
    	confirmPassword: new FormControl('', [
			Validators.required,
			Validators.email
		]),
    	phone: new FormControl('', [
			Validators.required
		])
  	})

  	onSubmit() {
  		console.log(this.registryForm.value);
  	}

  	get name() { return this.registryForm.controls.name }

}
