import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  constructor(
    private petService: PetService
  ) { }

  ngOnInit(): void {
    this.petService.showPet().subscribe(data => {
      console.log(data)
    })
  }

}
