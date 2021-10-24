import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { PetService } from 'src/app/services/pet.service';
import { Pet } from 'src/app/models/pet';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    data: Pet[]
    totalPet: number
  	constructor(
      private petService: PetService,
      private router: Router
    ) { }

  	ngOnInit(): void {
  		this.petService.showPet().subscribe((pets: Pet[]) => {
      		this.data = pets
          this.totalPet = pets.length
          console.log(pets)
    	})
  	}

    onDelete(id: String){
      const isConfirm = confirm('Bạn có muốn xóa tin này không')
      if(isConfirm){
        const lastPets = this.data.filter((pet: Pet) => pet._id !== id)
        this.data = lastPets

        this.petService.deletePet(id).subscribe((data: any) => {
          console.log(data)
        })
      }
    }

    onLogout(){
      localStorage.removeItem('token')
      this.router.navigate(['login'])
    }

}
