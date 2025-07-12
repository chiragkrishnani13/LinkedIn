import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private router: Router, public authService: AuthService) {}

  ngOnInit(): void {
    console.log('Login component initialized');
    
    // Check if a user is already logged in
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      console.log('User already logged in:', JSON.parse(loggedInUser));
      this.router.navigate(['/home']);
    }
  }

  onSubmit(): void {
    console.log('Login form submitted');
    
    if (this.authService.isLocked) {
      this.errorMessage = 'Too many failed attempts. Account locked for 1 minute.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    
    // Validation
    if (!this.username || !this.password) {
      this.errorMessage = 'Please enter both username and password';
      this.isLoading = false;
      return;
    }

    this.authService.login(this.username, this.password).subscribe(success => {
      this.isLoading = false;
      if (success) {
        this.router.navigate(['/home']);
      } else {
        if (this.authService.isLocked) {
          this.errorMessage = 'Too many failed attempts. Account locked for 1 minute.';
        } else {
          this.errorMessage = "Invalid username or password. Please try again.";
        }
      }
    });
  }

  navigateToRegister(): void {
    console.log('Navigating to register page');
    this.router.navigate(['/register']);
  }
}






