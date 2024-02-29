import { Component} from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagModule } from 'primeng/tag';
import { Subscription } from "rxjs";
import { MovieService } from '../../../movies/movie.service';
import { IMovie } from '../../../movies/movie';
import { IGenre } from '../../../movies/genre';


@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CarouselModule, TagModule, ButtonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  public pageTitle = "Astral Streaming";
  sub!: Subscription;
  movieList: IMovie[] = [];
  genreList: IGenre[] = [];
  errorMessage = '';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
   this.movieService.getMoviesByPopularity().subscribe(
    (movies) => {
      this.movieList = movies;
    } 
    );
  }

  setMovieList(movies: IMovie[]) {
    this.movieList = movies;
  }

  handleGenreClick(genre: string) {
    this.movieService.getGenres().subscribe(
      (genres) => {
        this.genreList = genres;
      }
    );
    console.log(this.genreList);
    const selectedGenre = this.genreList.find(genreList => genreList.name === genre);
    if (selectedGenre) {
      this.movieService.getMovieByGenre(selectedGenre.id).subscribe(
        (movies) => {
          this.movieList = movies;
        }
      )
    }
    console.log(this.movieList);
  }

  onSearch(title: string) {
    this.movieService.getMoviesByTitle(title).subscribe(
      (movies) => {
        this.movieList = movies;
      }
    )
  }

  products = [
    { name: 'Movie 1', price: 14.99, inventoryStatus: 'Available', poster: "./assets/images/genericMoviePoster.jpg"},
    { name: 'Movie 2', price: 14.99, inventoryStatus: 'Available', poster: "./assets/images/genericMoviePoster.jpg" },
    { name: 'Movie 3', price: 14.99, inventoryStatus: 'Available', poster: "./assets/images/genericMoviePoster.jpg" },
    { name: 'Movie 4', price: 14.99, inventoryStatus: 'Available', poster: "./assets/images/genericMoviePoster.jpg" },
    { name: 'Movie 5', price: 14.99, inventoryStatus: 'Available', poster: "./assets/images/genericMoviePoster.jpg" },
    { name: 'Movie 6', price: 14.99, inventoryStatus: 'Available', poster: "./assets/images/genericMoviePoster.jpg" },
    { name: 'Movie 7', price: 14.99, inventoryStatus: 'Available', poster: "./assets/images/genericMoviePoster.jpg" },
    { name: 'Movie 8', price: 14.99, inventoryStatus: 'Available', poster: "./assets/images/genericMoviePoster.jpg" },
    { name: 'Movie 9', price: 14.99, inventoryStatus: 'Available', poster: "./assets/images/genericMoviePoster.jpg" }
  ];
}
