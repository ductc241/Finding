import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { SupportComponent } from './components/support/support.component';
import { PetsComponent } from './components/pets/pets.component';
import { PetComponent } from './components/pet/pet.component';
import { ReportMissingComponent } from './components/forms/report-missing/report-missing.component';
import { LoginComponent } from './components/forms/login/login.component';
import { RegistryComponent } from './components/forms/registry/registry.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AuthGuard } from './services/guard/auth.guard'


const routes: Routes = [
	{
		path: '', 
		component: CustomersComponent ,
		children: [
			{
				path: 'support',
				component: SupportComponent
			},
			{
				path: 'report',
				component: ReportMissingComponent
			},
			{
				path: 'viewpets',
				component: PetsComponent
			},
			{
				path: 'pet/:id',
				component: PetComponent
			},
			{
				path: 'login',
				component: LoginComponent
			},
			{
				path: 'registry',
				component: RegistryComponent
			},
			{
				path: 'user/dashboard',
				component: DashboardComponent,
				canActivate: [AuthGuard]
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CustomersRoutingModule { }
