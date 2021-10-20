import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';
import { Pet } from 'src/app/models/pet';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  
  data: any
  category = {
    types: ['Dog', 'Cat', 'Rabbit', 'Bird', 'Horse'],
    colors: ['Black', 'White', 'Brown', 'Ginger'],
  }
  totalLength: any
  page: number = 1
  
  filterData: any
  filterKey: any = {
    type: [],
    color: []
  }

  constructor(
    private petService: PetService
  ) { }

  ngOnInit(): void {
    this.petService.showPet().subscribe(pets => {
      this.filterData = pets
      this.totalLength = pets.length
      this.data = pets
    })
  }

  filterPets($event: any) {
    const tag = $event.target
    const filterAttr = tag.dataset.filter
    const result = []

    if(tag.checked){
      const result = []
      this.filterKey[filterAttr].push(tag.value)

      for(let key in this.filterKey){
        for(let pet of this.data){
          if(this.filterKey[key].indexOf(pet[key]) >= 0){
            result.push(pet)
          }
        }
      }

      this.filterData = result
      this.totalLength = result.length
    }
  }

  sortPets($event: any){
    // a = new Date('2021-10-08')
    // b = new Date('2021-10-09')
    // c = [a, b]
    // c.sort((a,b)=>b.getTime()-a.getTime()); => ngay lac gan nhat
    // this.filterData = this.data.
  }
}
