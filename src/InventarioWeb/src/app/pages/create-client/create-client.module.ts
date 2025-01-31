import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { CreateClientComponent } from './create-client.component';
import { authGuard } from '../../custom/auth.guard';

const routes: Routes = [
  {
path:'',
component: CreateClientComponent,canActivate: [authGuard]
  }]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CreateClientModule { }
