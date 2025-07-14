import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  loginAttempts = 0;
  isLocked = false;
  lockoutEndTime = 0;

  constructor() {
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
    console.log('Auth service login attempt:', { username, password });
    
    if (this.isLocked) {
      console.log('Login blocked: Account is locked');
      return of(false);
    }

    // Fetch users from localStorage
    const usersString = localStorage.getItem("users");
    const users = usersString ? JSON.parse(usersString) : [];
    console.log('All registered users:', users);

    // Find matching user
    const matchedUser = users.find(
      (user: any) => user.username === username && user.password === password
    );

    if (matchedUser) {
      console.log('Login successful for user:', matchedUser);
      
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
      console.log('Login failed: Invalid credentials');
      
      // Increment login attempts
      this.loginAttempts++;
      localStorage.setItem('loginAttempts', this.loginAttempts.toString());
      console.log('Failed login attempts:', this.loginAttempts);
      
      // Lock account after 3 failed attempts
      if (this.loginAttempts >= 3) {
        this.isLocked = true;
        this.lockoutEndTime = Date.now() + (1 * 60 * 1000); // 1 minute lockout
        localStorage.setItem('loginLockout', JSON.stringify({ endTime: this.lockoutEndTime }));
        console.log('Account locked until:', new Date(this.lockoutEndTime).toLocaleTimeString());
        this.startLockoutTimer();
      }
      
      return of(false);
    }
  }

  logout(): void {
    console.log('Logging out user');
    localStorage.removeItem('loggedInUser');
    this.isLoggedIn = false;
  }

  checkLoginStatus(): boolean {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      this.isLoggedIn = true;
      return true;
    }
    this.isLoggedIn = false;
    return false;
  }

  startLockoutTimer(): void {
    console.log('Starting lockout timer');
    const interval = setInterval(() => {
      if (this.lockoutEndTime <= Date.now()) {
        console.log('Lockout period ended');
        this.isLocked = false;
        localStorage.removeItem('loginLockout');
        clearInterval(interval);
      }
    }, 1000);
  }

  // isLoggedInUser(){}
}


