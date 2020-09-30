import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AddtourComponent} from './addtour/addtour.component';
import {PersonsComponent} from './persons/persons.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'addtour', component: AddtourComponent },
  { path: 'persons', component: PersonsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
