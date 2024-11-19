import { Routes } from '@angular/router';

export const Full_ROUTES: Routes = [
  {
    path: 'brand',
    loadChildren: () => import('../pages/brand/brand.module').then(m => m.BrandModule)
  },
  {
    path: 'create_brand',
    loadChildren: () => import('../pages/create-brand/create-brand.module').then(m => m.CreateBrandModule)
  }
]
