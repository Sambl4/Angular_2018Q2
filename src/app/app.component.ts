import { Component } from '@angular/core';

import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
    // router.events.forEach((event) => {
    //   if (event instanceof NavigationEnd) {
    //   }
    //   console.log(event.NavigationEnd);
    //   console.log(NavigationEnd);
    //   // NavigationEnd
    //   // NavigationCancel
    //   // NavigationError
    //   // RoutesRecognized
    // });

    // this.router.events.forEach(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
    //   // You only receive NavigationStart events
    // });
  }
}
