import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError, map } from "rxjs";
import {IMovie} from "./movie"

@Injectable({
    providedIn: 'root'
})

export class MovieService {

    private baseUrl = 'http://localhost:8080'
    private movieUrl = this.baseUrl + '/api/v1/movies';
    private movieByTitleUrl = `${this.movieUrl}/movie-by-title/`;
    private moviesByPopularity = `${this.movieUrl}/movies-by-popularity`

    constructor(private http: HttpClient){ } 

    getMoviesByTitle(titleOfMovie: string): Observable<IMovie[]> {
        const url = `${this.movieUrl}/movie-by-title/${encodeURIComponent(titleOfMovie)}`;
        return this.http.get<IMovie[]>(url)
          .pipe(
              tap(data => console.log('Movies: ', JSON.stringify(data))),
              catchError(this.handleError)
        );
      }

    getMoviesByPopularity(): Observable<IMovie[]>{
        const url = `${this.moviesByPopularity}`
        return this.http.get<IMovie[]>(url)
          .pipe(
            map((response: any) => response.results),
            tap(data => console.log('Popular movies list:', JSON.stringify(data)))
          )
    }

      private handleError(err: HttpErrorResponse): Observable<never> {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(() => errorMessage);
      }
}