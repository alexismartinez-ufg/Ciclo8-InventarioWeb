import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { authGuard } from '../../custom/auth.guard';

const routes: Routes = [
  {
  path:'',
    component: ClientComponent,canActivate: [authGuard]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
