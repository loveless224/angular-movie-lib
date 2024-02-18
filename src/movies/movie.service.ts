import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError, map } from "rxjs";

import {IMovie} from "./movie"

@Injectable({
    providedIn: 'root'
})

export class MovieService {

    private baseUrl = 'http://localhost:8080'
    private movieUrl = '/api/v1/movies';
    private movieByTitleUrl = `${this.movieUrl}/movie-by-title/`;

    constructor(private http: HttpClient){ } 

    getMoviesByTitle(titleOfMovie: string): Observable<IMovie[]> {
        const url = `${this.baseUrl + this.movieUrl}/movie-by-title/${encodeURIComponent(titleOfMovie)}`;
        return this.http.get<IMovie[]>(url)
          .pipe(
              tap(data => console.log('Movies: ', JSON.stringify(data))),
              catchError(this.handleError)
        );
      }

      private handleError(err: HttpErrorResponse): Observable<never> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(() => errorMessage);
      }
}