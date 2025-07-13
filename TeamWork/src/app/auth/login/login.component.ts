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
    
    // Force logout when visiting login page
    this.authService.logout();
    
    // Log all users from localStorage for debugging
    const usersString = localStorage.getItem('users');
    const users = usersString ? JSON.parse(usersString) : [];
    console.log('All registered users:', users);
  }

  onSubmit(): void {
    console.log('Login form submitted');
    console.log('Attempting login with:', { username: this.username, password: this.password });
    
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
        // Log the logged-in user details
        const loggedInUserString = localStorage.getItem('loggedInUser');
        const loggedInUser = loggedInUserString ? JSON.parse(loggedInUserString) : null;
        console.log('User successfully logged in:', loggedInUser);
        
        // Navigate to home page
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


