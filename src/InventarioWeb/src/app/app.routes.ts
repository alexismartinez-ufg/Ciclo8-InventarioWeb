import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { BrandComponent } from './pages/brand/brand.component';
import { authGuard } from './custom/auth.guard';
import { FullComponent } from './layouts/full/full.component';
import { Full_ROUTES} from './shared/full-layout.routes';
import { CONTENT_ROUTES} from './shared/content-layout.routes';
import { ContentComponent } from './layouts/content/content.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: '', component: FullComponent,data: { title: 'full Views' },children: Full_ROUTES },
    {path: '', component: ContentComponent,data: { title: 'content Views' },children: CONTENT_ROUTES },
    { path: '**', redirectTo: 'login' }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)], // Configuración del enrutador
});
