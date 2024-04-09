import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../movies/movie.service';
import { IMovie } from '../../movies/movie';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {
  movie: any;

  constructor(private route: ActivatedRoute, private movieService : MovieService) {}

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        const movieId= params['id'];
        this.movie = this.movieService.getMovieById(movieId);
        console.log("It Hit!")
      });
    }
  }
