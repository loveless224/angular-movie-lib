import { Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'detail/:id', component: DetailComponent, title: 'Details' },
  { path: 'genre/:genre', component: WelcomeComponent }
];

export default routes;
