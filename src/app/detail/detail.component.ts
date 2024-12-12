import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../../movies/movie.service';
import { DataService } from '../../data/dataservice';
import { IMovie } from '../../movies/movie';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgStyle } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [NgIf, NgStyle],
  template: `
    <div class="background-container" *ngIf="movie?.poster_path">
      <div class="background-image" [ngStyle]="{'background-image': 'url(' + getBackgroundImage() + ')'}"></div>
    </div>

    <div class="content-container">
      <div class="moviePosterContainer" *ngIf="movie?.poster_path && movie?.original_title && movie?.release_date">
        <img class="moviePoster" [src]="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
             />
      </div>
      <p>{{ movie.original_title }}</p>
      <p>Release Date: {{ movie.release_date }}</p>
       
      <div class="movie-details">
        <button (click)="onPlayClick()" class="play-button">
          Play Video
        </button>

        <div *ngIf="isVideoPlaying && youtubeUrl">
          <iframe [src]="youtubeUrl" width="640" height="360" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  `,
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit, OnDestroy {

  movie: IMovie = {} as IMovie;
  youtubeUrl: SafeResourceUrl | null = null;
  isVideoPlaying: Boolean = false;
  subscription : Subscription | null = null;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private dataService: DataService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const movieId = Number(this.route.snapshot.paramMap.get('id'));
    if (movieId) {
      console.log(movieId);
      this.movieService.getMovieById(movieId).subscribe(
        (movie) => {
          this.dataService.updateData([movie]);
          this.movie = movie; // Update local movie data

          // Sanitize the YouTube URL
          if (movie.youtubeUrl) {
            this.youtubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(movie.youtubeUrl); 
          }
        },
        (error) => {
          console.error('Error fetching movie by ID:', error);
        }
      );
    }
  }

  onPlayClick() {
    console.log(this.movie);
    if (this.youtubeUrl) 
    {
      this.isVideoPlaying = true;
    }
    else{
      console.error('Video URL Unavailable')
    }
  }

  getBackgroundImage(): string {
    return `https://image.tmdb.org/t/p/w1280/${this.movie.poster_path}`
  }

  ngOnDestroy(): void {
    if(this.subscription)
    {
      this.subscription.unsubscribe;
    }
  }
}
