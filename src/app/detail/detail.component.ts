import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movies/movie.service';
import { DataService } from '../../data/dataservice';
import { IMovie } from '../../movies/movie';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [NgIf],
  template: `
    <div class = "moviePosterContainer" *ngIf="movie?.poster_path && movie?.original_title && movie?.release_date">
    <img class ='moviePoster'[src]="'https://image.tmdb.org/t/p/original/' + movie.poster_path" class="w-6 shadow-2 movieDetailPoster"
    style="max-width: 100%; max-height: 200px;"/>
    </div>
    <p>{{ movie.original_title }}</p>
    <p>Release Date: {{ movie.release_date }}</p>
      <!-- Add more movie details as necessary -->
  `,
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private dataService: DataService
  ) {}

  movie: IMovie = {} as IMovie;

  ngOnInit(): void {
    const movieId = Number(this.route.snapshot.paramMap.get('id'));
    if (movieId) {
      console.log(movieId)
      this.movieService.getMovieById(movieId).subscribe(
        (movie) => {
          // Update the movie data in the dataService
          this.dataService.updateData([movie]);
          this.movie = movie;  // Update local movie data\
        },
        (error) => {
          console.error('Error fetching movie by ID:', error);
        }
      );
    }
  }

}
