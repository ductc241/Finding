import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-report-missing',
  templateUrl: './report-missing.component.html',
  styleUrls: ['./report-missing.component.css']
})
export class ReportMissingComponent implements OnInit {
	public image: String 
  	constructor(
		private petService:PetService
	) { }

  	ngOnInit(): void {
  	}

  	reportForm = new FormGroup({
  	 	type: new FormControl('', [Validators.required]),
    	date: new FormControl('', [Validators.required]),
    	name: new FormControl(),
    	age: new FormControl(),
    	breed: new FormControl(),
    	gender: new FormControl(),
    	area: new FormControl('', [Validators.required]),
    	weight: new FormControl(),
    	height: new FormControl(),
    	color: new FormControl('', [Validators.required]),
    	describe: new FormControl(),
  	})

  	onSubmit() {
  		this.petService.postReport({
  			...this.reportForm.value,
  			image: this.image
  		})
  	}

	getImage($event: any){
		this.image = $event.target.files[0]
	}
}
