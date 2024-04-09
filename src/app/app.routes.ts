import { Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

export const routes: Routes = [
{ path: 'welcome', component: WelcomeComponent },
{ path: 'movie/:id', component: MovieDetailComponent},
{ path: '', redirectTo: 'welcome' , pathMatch: 'full' }
];
