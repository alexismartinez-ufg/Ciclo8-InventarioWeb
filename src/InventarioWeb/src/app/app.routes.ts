import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { BrandComponent } from './pages/brand/brand.component';
import { authGuard } from './custom/auth.guard';
import { FullComponent } from './layouts/full/full.component';
import { Full_ROUTES } from './shared/full-layout.routes';
import { CONTENT_ROUTES } from './shared/content-layout.routes';
import { ContentComponent } from './layouts/content/content.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClientComponent } from './pages/client/client.component';

export const routes: Routes = [
  // Redirección inicial
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Rutas con diseño completo
  {
    path: '',
    component: FullComponent,
    data: { title: 'full Views' },
    children: Full_ROUTES,
  },

  // Rutas con diseño de contenido
  {
    path: '',
    component: ContentComponent,
    data: { title: 'content Views' },
    children: CONTENT_ROUTES,
  },

  // Ruta para el componente Client
  {
    path: 'client',
    component: ClientComponent,
    canActivate: [authGuard],
  },

  // Ruta comodín para redirigir cualquier URL no encontrada
  { path: '**', redirectTo: 'login' },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)], // Configuración del enrutador
});
