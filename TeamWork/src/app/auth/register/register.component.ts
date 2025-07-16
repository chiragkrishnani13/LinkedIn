import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

// Define a type for user objects
type User = {
  username: string;
  email: string;
  password: string;
  fullname?: string;
  dob?: string;
  joinDate?: string;
  userType?:string;
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  fullname: string = '';
  password: string = '';
  confirmPassword: string = '';
  dob: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';
  userType:string='';
  options = ['Canditate', 'Admin',];
  selectedOption:any

  constructor(private router: Router, private authService: AuthService) { }
  


  onSubmit(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.authService.userType()
    
    
    // Validation
    if (!this.username || !this.email || !this.fullname || !this.password || !this.confirmPassword || !this.dob) {
      this.errorMessage = 'Please fill in all required fields';
      this.isLoading = false;
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      this.isLoading = false;
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.errorMessage = 'Please enter a valid email address';
      this.isLoading = false;
      return;
    }

    // Check if username already exists
    const usersString = localStorage.getItem('users');
    const users: User[] = usersString ? JSON.parse(usersString) : [];
    
    if (users.some((user: User) => user.username === this.username)) {
      this.errorMessage = 'Username already exists. Please choose another one.';
      this.isLoading = false;
      return;
    }

    if (users.some((user: User) => user.email === this.email)) {
      this.errorMessage = 'Email already registered. Please use another email or login.';
      this.isLoading = false;
      return;
    }

    // Create new user
    const newUser: User = {
      username: this.username,
      email: this.email,
      fullname: this.fullname,
      password: this.password,
      dob: this.dob,
      userType:this.selectedOption
    };

    // Log to console
    console.log('New user registration:', newUser);

    // Store user in localStorage
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('loggedInUser',this.username)
    
    // Make sure we're logged out
    this.authService.logout();
    
    // Log all users to console
    console.log('All users:', users);
    
    this.isLoading = false;
    alert('Registration successful! Please login with your new account.');
    this.router.navigate(['/login']);
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);

  }
  onSelectionChange(){
    if(this.selectedOption == "Admin"){
      this.authService.isLoggedInAdmin = true;
    }
    else if(this.selectedOption == "Canditate"){
      this.authService.isLoggedInUser = true
    }
  }
  ngOnInit(){
    this.onSelectionChange()
    console.log(this.username);
  }

}










