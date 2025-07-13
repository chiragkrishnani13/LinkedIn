import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TeamWork';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    // Check login status on app initialization
    const isLoggedIn = this.authService.checkLoginStatus();
    console.log('Initial login status:', isLoggedIn);
    
    // If user is already logged in and on the login page, redirect to home
    if (isLoggedIn && this.router.url === '/login') {
      console.log('Already logged in, redirecting to home');
      this.router.navigate(['/home']);
    }
    
    // Listen for route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      console.log('Navigation to:', event.url);
      
      // If navigating to login page, always force logout
      if (event.url === '/login') {
        console.log('Navigated to login page, forcing logout');
        this.authService.logout();
      }
      
      // If navigating to home or other protected pages, check login status
      if (event.url !== '/login' && event.url !== '/register') {
        if (!this.authService.checkLoginStatus()) {
          console.log('Not logged in, redirecting to login page');
          this.router.navigate(['/login']);
        }
      }
    });
  }
}
