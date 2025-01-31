import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { authGuard } from '../../custom/auth.guard';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
path:'',
component: CategoryComponent,canActivate: [authGuard]
  }]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CategoryModule { }
