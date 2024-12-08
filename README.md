# Movie Finder

This project is a Movie Finder application that integrates with TheMovieDB API to display a list of movies along with their details, including videos, such as trailers. The back-end is built using **Java Spring Boot**, and the front-end is implemented using **Angular**. The app allows users to browse movies, view detailed information about each movie, and watch trailers.

## Features

- **Movie Listing**: Displays a list of popular movies retrieved from TheMovieDB API.
- **Movie Details**: Shows detailed information about a selected movie, including the title, release date, genres, and a brief description.
- **Video Playback**: Allows users to watch trailers of the movies directly from the UI.
- **Search**: Users can search for movies by title, filtering the results to find specific movies.
  
## Tech Stack

- **Back-End**: 
  - Java Spring Boot (angular-movie-service)
  - TheMovieDB API integration
  - RESTful API for movie data
  
- **Front-End**:
  - Angular (angular-movie-lib)
  - HTML, CSS, TypeScript
  - Bootstrap (for UI components)

## Prerequisites

- Java 17 or higher
- Node.js (for running Angular)
- Maven (for building the Spring Boot application)
- An API key from [TheMovieDB](https://www.themoviedb.org/documentation/api)

## Setup Instructions

### 1. Back-End Setup (Java Spring Boot)
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
