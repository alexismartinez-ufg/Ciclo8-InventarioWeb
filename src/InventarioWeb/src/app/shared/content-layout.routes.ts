import { Routes } from '@angular/router';

//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...

export const CONTENT_ROUTES: Routes = [
    {
        path: 'login',
        loadChildren: () => import('../pages/login/login.module').then(m => m.LoginModule)
    },
    {
      path: 'registro',
      loadChildren: () => import('../pages/registro/registro.module').then(m => m.RegistroModule)
  }
];
