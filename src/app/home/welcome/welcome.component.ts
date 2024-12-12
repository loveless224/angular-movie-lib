import { Component, OnInit, OnDestroy} from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Subscription } from "rxjs";
import { MovieService } from '../../../movies/movie.service';
import { IMovie } from '../../../movies/movie';
import { IGenre } from '../../../movies/genre';
import { DataService } from '../../../data/dataservice';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CarouselModule, TagModule, ButtonModule, RouterModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit, OnDestroy{
  public pageTitle = "";
  sub!: Subscription;
  movieList: IMovie[] = [];
  genreList: IGenre[] = [];
  errorMessage = '';
  private subscription: Subscription | null = null;

  constructor(private movieService: MovieService, private dataService: DataService) {
    this.dataService.movieList$.subscribe(newData => {
      this.movieList = newData;
    });
  }

  ngOnInit(): void {
   this.movieService.getMoviesByPopularity().subscribe(
    (movies) => {
      this.movieList = [...movies];
    } 
   );
  }

  ngOnDestroy(): void {
    if(this.subscription)
    {
      this.subscription.unsubscribe;
    }
  }
}
