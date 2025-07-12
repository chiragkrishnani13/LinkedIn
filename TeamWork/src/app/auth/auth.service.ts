import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

// Define a type for user objects
type User = {
  username: string;
  password: string;
  email?: string;
  fullname?: string;
  dob?: string;
  joinDate?: string;
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  redirectUrl: string | null = null;
  loginAttempts = 0;
  isLocked = false;
  lockoutEndTime = 0;

  constructor(private router: Router) {
    // Check if account is locked
    const lockoutInfo = localStorage.getItem('loginLockout');
    if (lockoutInfo) {
      const lockout = JSON.parse(lockoutInfo);
      if (lockout.endTime > Date.now()) {
        this.isLocked = true;
        this.lockoutEndTime = lockout.endTime;
        this.startLockoutTimer();
      } else {
        localStorage.removeItem('loginLockout');
      }
    }
    
    // Get stored login attempts
    const storedAttempts = localStorage.getItem('loginAttempts');
    if (storedAttempts) {
      this.loginAttempts = parseInt(storedAttempts);
    }
  }

  login(username: string, password: string): Observable<boolean> {
    if (this.isLocked) {
      return of(false);
    }

    // Fetch users from localStorage
    const usersString = localStorage.getItem("users");
    const users: User[] = usersString ? JSON.parse(usersString) : [];

    // Find matching user
    const matchedUser = users.find(
      (user: User) => user.username === username && user.password === password
    );

    if (matchedUser) {
      // Reset login attempts
      this.loginAttempts = 0;
      localStorage.removeItem('loginAttempts');
      
      // Save session
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
      this.isLoggedIn = true;
      
      return of(true).pipe(
        delay(1000),
        tap(() => this.isLoggedIn = true)
      );
    } else {
      // Increment login attempts
      this.loginAttempts++;
      localStorage.setItem('loginAttempts', this.loginAttempts.toString());
      
      // Lock account after 3 failed attempts
      if (this.loginAttempts >= 3) {
        this.isLocked = true;
        this.lockoutEndTime = Date.now() + (1 * 60 * 1000); // 1 minute lockout
        localStorage.setItem('loginLockout', JSON.stringify({ endTime: this.lockoutEndTime }));
        this.startLockoutTimer();
      }
      
      return of(false);
    }
  }

  logout(): void {
    localStorage.removeItem('loggedInUser');
    this.isLoggedIn = false;
  }

  startLockoutTimer(): void {
    const interval = setInterval(() => {
      if (this.lockoutEndTime <= Date.now()) {
        this.isLocked = false;
        localStorage.removeItem('loginLockout');
        clearInterval(interval);
      }
    }, 1000);
  }
}