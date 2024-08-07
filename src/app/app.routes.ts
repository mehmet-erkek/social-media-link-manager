import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/sayfa/login.page/login.page.component';
import { SocialMediaManagerComponent } from './components/sayfa/social-media-manager/social-media-manager.component';
import { AuthGuard } from './services/auth.guard';
import { LinkResolver } from './services/link.resolver';
//import { ProtectedComponent } from './pages/protected/protected.component'; // Korunan bileşen tablo sayfası 

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'social-media-manager' ,component: SocialMediaManagerComponent, canActivate: [AuthGuard] },
  { path: 'edit-link/:id', component: SocialMediaManagerComponent, resolve: { link: LinkResolver }, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
