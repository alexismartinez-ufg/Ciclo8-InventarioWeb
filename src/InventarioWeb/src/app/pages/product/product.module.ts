import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { authGuard } from '../../custom/auth.guard';
import { Routes } from '@angular/router';

const routes: Routes = [
  {
path:'',
component: ProductComponent,canActivate: [authGuard]
  }]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
