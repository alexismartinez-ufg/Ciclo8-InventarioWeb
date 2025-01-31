import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { authGuard } from '../../custom/auth.guard';
import { CreateBrandComponent } from '../create-brand/create-brand.component';
import { Routes } from '@angular/router';

const routes: Routes = [
    {
      path:'',
      component: CreateBrandComponent,canActivate: [authGuard]
    }
  ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CreateCategoryModule { }
