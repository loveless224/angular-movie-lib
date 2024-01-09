import { Component, NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { RouterLinkActive, RouterLink, RouterOutlet } from "@angular/router";

@Component({
    selector: 'pm-root',
    template: `
    <nav class='navbar navbar-expand navbar-light bg-light' style='margin-bottom: 10px;'>
    <img src="./assets/images/logoNav.png"
               class="img-responsive center-block"
               style="max-height:100px;padding-bottom:5px" />
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
          <li><a  routerLinkActive='active' routerLink='/welcome' style='margin-left: 50px;'>Action</a></li>
          <li><a  routerLinkActive='active' routerLink='/welcome' style='margin-left: 50px;'>Comedy</a></li>
          <li><a  routerLinkActive='active' routerLink='/welcome' style='margin-left: 50px;'>Horror</a></li>
          <li><a  routerLinkActive='active' routerLink='/welcome' style='margin-left: 50px;'>Thriller</a></li>
          <li><a  routerLinkActive='active' routerLink='/welcome' style='margin-left: 50px;'>Animation</a></li>
          <li><a  routerLinkActive='active' routerLink='/welcome' style='margin-left: 50px;'>Family</a></li>
          <li><a  routerLinkActive='active' routerLink='/welcome' style='margin-left: 50px;'> Romance</a></li>
          <li style='margin-left: 50px;'>Search<input style='margin-left: 10px;'></li>
        </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `,
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [RouterLinkActive, RouterLink, RouterOutlet]
})
export class AppComponent {
  pageTitle = '';
}
