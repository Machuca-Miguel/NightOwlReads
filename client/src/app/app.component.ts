import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isLogged$ = this.authService.authState;
  title = 'My-Library-Angular-App';

  constructor( private authService: AuthService, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        console.log('Navigation started:', event.url);
      } else if (event instanceof NavigationEnd) {
        console.log('Navigation ended:', event.url);
      } else if (event instanceof NavigationError) {
        console.error('Navigation error:', event.error);
      } else if (event instanceof NavigationCancel) {
        console.log('Navigation canceled:', event.url);
      }
    });
  }
  ngOnInit() {
    if (this.authService.isLogged() && this.router.url === '/') {
      this.router.navigate(['/user']);
    }
  }
}
