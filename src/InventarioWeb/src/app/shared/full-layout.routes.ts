import { Routes } from '@angular/router';

export const Full_ROUTES: Routes = [
  {
    path: 'brand',
    loadChildren: () => import('../pages/brand/brand.module').then(m => m.BrandModule)
  },
  {
    path: 'create_brand',
    loadChildren: () => import('../pages/create-brand/create-brand.module').then(m => m.CreateBrandModule)
  },
  {
    path: 'category',
    loadChildren: () => import('../pages/category/category.module').then(m => m.CategoryModule)
  },
  {
    path: 'create-category',
    loadChildren: () => import('../pages/create-category/create-category.module').then(m => m.CreateCategoryModule)
  },
  {
    path: 'client',
    loadChildren: () => import('../pages/client/client.module').then(m => m.ClientModule)
  },
  {
    path: 'create-client',
    loadChildren: () => import('../pages/create-client/create-client.module').then(m => m.CreateClientModule)
  },
  {
    path: 'product',
    loadChildren: () => import('../pages/product/product.module').then(m => m.ProductModule)
  }
]
