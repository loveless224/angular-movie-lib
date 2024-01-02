import { Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';

export const routes: Routes = [
{ path: 'welcome', component: WelcomeComponent },
{ path: '', redirectTo: 'welcome' , pathMatch: 'full' }
];
