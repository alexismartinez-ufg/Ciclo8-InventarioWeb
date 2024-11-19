import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBrandComponent } from './create-brand.component';
import { authGuard } from '../../custom/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

const routes: Routes = [
  {
path:'',
component: CreateBrandComponent,canActivate: [authGuard]
  }]

@NgModule({
  declarations: [
    CreateBrandComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    RouterModule.forChild(routes)
  ]
})
export class CreateBrandModule { }
