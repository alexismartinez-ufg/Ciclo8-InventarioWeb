import { Routes } from '@angular/router';

export const Full_ROUTES: Routes = [
  {
    path: 'brand',
    loadChildren: () => import('../pages/brand/brand.module').then(m => m.BrandModule)
}
]
