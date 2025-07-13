import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    // Check if user is logged in
    if (!this.authService.checkLoginStatus()) {
      console.log('Not logged in, redirecting to login page');
      this.router.navigate(['/login']);
    } else {
      console.log('User is logged in, showing home page');
    }
  }
}



