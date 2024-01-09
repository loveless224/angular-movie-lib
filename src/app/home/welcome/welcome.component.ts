import { Component} from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TagModule } from 'primeng/tag';


@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CarouselModule, TagModule, ButtonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  public pageTitle = "Astral Streaming"

  products = [
    { name: 'Movie 1', price: 14.99, inventoryStatus: 'Available', poster: "./assets/images/genericMoviePoster.jpg"},
    { name: 'Movie 2', price: 14.99, inventoryStatus: 'Available', poster: "./assets/images/genericMoviePoster.jpg" },
    { name: 'Movie 3', price: 14.99, inventoryStatus: 'Available', poster: "./assets/images/genericMoviePoster.jpg" },
    { name: 'Movie 4', price: 14.99, inventoryStatus: 'Available', poster: "./assets/images/genericMoviePoster.jpg" },
    { name: 'Movie 1', price: 14.99, inventoryStatus: 'Available', poster: "./assets/images/genericMoviePoster.jpg" },
    { name: 'Movie 2', price: 14.99, inventoryStatus: 'Available', poster: "./assets/images/genericMoviePoster.jpg" },
    { name: 'Movie 3', price: 14.99, inventoryStatus: 'Available', poster: "./assets/images/genericMoviePoster.jpg" },
    { name: 'Movie 4', price: 14.99, inventoryStatus: 'Available', poster: "./assets/images/genericMoviePoster.jpg" },
    { name: 'Movie 5', price: 14.99, inventoryStatus: 'Available', poster: "./assets/images/genericMoviePoster.jpg" }
  ];
}
