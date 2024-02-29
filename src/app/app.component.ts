import { Component, NgModule, ViewChild } from "@angular/core";
import { NgModel } from "@angular/forms";
import { RouterLinkActive, RouterLink, RouterOutlet } from "@angular/router";
import { MovieService } from "../movies/movie.service";
import { IMovie } from "../movies/movie";
import { FormsModule } from "@angular/forms";
import { IGenre } from "../movies/genre";
import { WelcomeComponent } from "./home/welcome/welcome.component";

@Component({
    selector: 'pm-root',
    template: `
    <nav class='navbar navbar-expand navbar-light bg-light' style='margin-bottom: 10px;'>
    <img src="./assets/images/logoNav.png"
               class="img-responsive center-block"
               style="max-height:100px;padding-bottom:5px" />
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
          <li><a  (click)="handleGenreClick('Action')" style='margin-left: 50px; cursor: pointer;'>Action</a></li>
          <li><a  (click)="handleGenreClick('Comedy')" style='margin-left: 50px; cursor: pointer;'>Comedy</a></li>
          <li><a  (click)="handleGenreClick('Horror')" style='margin-left: 50px; cursor: pointer;'>Horror</a></li>
          <li><a  (click)="handleGenreClick('Thriller')" style='margin-left: 50px; cursor: pointer;'>Thriller</a></li>
          <li><a  (click)="handleGenreClick('Animation')" style='margin-left: 50px; cursor: pointer;'>Animation</a></li>
          <li><a  (click)="handleGenreClick('Family')" style='margin-left: 50px; cursor: pointer;'>Family</a></li>
          <li><a  (click)="handleGenreClick('Romance')" style='margin-left: 50px; cursor: pointer;'> Romance</a></li>
          <li style='margin-left: 50px;'>Search<input style='margin-left: 10px;' type="text" [(ngModel)]="searchQuery" (keydown.enter)="onSearch(searchQuery)"></li>
        </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `,
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [RouterLinkActive, RouterLink, RouterOutlet, FormsModule]
})
export class AppComponent {
  constructor(private movieService: MovieService){}

  welcomeComponent = new WelcomeComponent(this.movieService);


  searchQuery: string = '';

  onSearch(title: string) {
    this.welcomeComponent.onSearch(title);
  }

  handleGenreClick(genre: string) {
    this.welcomeComponent.handleGenreClick(genre);
  }
  pageTitle = '';
}
