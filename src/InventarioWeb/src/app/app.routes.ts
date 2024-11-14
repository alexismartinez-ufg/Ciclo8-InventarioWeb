import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { BrandComponent } from './pages/brand/brand.component';
import { authGuard } from './custom/auth.guard';

export const routes: Routes = [
    {path:"", component:LoginComponent},
    {path:"registro", component:RegistroComponent},
    {path:"brand", component:BrandComponent, canActivate:[authGuard]},
];
