import { Component} from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Subscription } from "rxjs";
import { MovieService } from '../../../movies/movie.service';
import { IMovie } from '../../../movies/movie';
import { IGenre } from '../../../movies/genre';
import { DataService } from '../../../data/dataservice';


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

  setMovieList(movies: IMovie[]) {
    this.movieList = [...movies];
  }

  onSearch(title: string) {
    this.movieService.getMoviesByTitle(title).subscribe(
      (movies) => {
        this.movieList = [...movies];
      }
    )
  }
}
