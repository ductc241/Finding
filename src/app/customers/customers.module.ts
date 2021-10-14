import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { HeaderComponent } from './components/header/header.component';
import { SupportComponent } from './components/support/support.component';
import { ReportMissingComponent } from './components/forms/report-missing/report-missing.component';
import { LoginComponent } from './components/forms/login/login.component';
import { PetsComponent } from './components/pets/pets.component';
import { PetComponent } from './components/pet/pet.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistryComponent } from './components/forms/registry/registry.component';


@NgModule({
  declarations: [
    CustomersComponent,
    HeaderComponent,
    SupportComponent,
    ReportMissingComponent,
    LoginComponent,
    PetsComponent,
    PetComponent,
    FooterComponent,
    RegistryComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
  ]
})
export class CustomersModule { }
