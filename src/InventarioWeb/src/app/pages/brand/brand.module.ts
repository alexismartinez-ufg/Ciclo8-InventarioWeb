import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandComponent } from './brand.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../../custom/auth.guard';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
path:'',
component: BrandComponent,canActivate: [authGuard]
  }]

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BrandComponent
  ]
})
export class BrandModule { }
