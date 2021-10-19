import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';
import { Pet } from 'src/app/models/pet';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  totalLength: any
  page: number = 1
  data: any
  filterData: any

  constructor(
    private petService: PetService
  ) { }

  ngOnInit(): void {
    this.petService.showPet().subscribe(pets => {
      this.totalLength = pets.length
      this.data = pets
      this.filterData = pets
    })
  }

  filterPets($event: any) {
    const key = $event.target.value
    this.filterData = this.data.filter((pet: Pet) => pet.type === key)
  }

  sortPets($event: any){
    // a = new Date('2021-10-08')
    // b = new Date('2021-10-09')
    // c = [a, b]
    // c.sort((a,b)=>b.getTime()-a.getTime()); => ngay lac gan nhat
    // this.filterData = this.data.
  }
}
