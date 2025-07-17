import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/admin/services/company.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService:AuthService,private companyService:CompanyService , private router:Router){

  }
  user:any;
  admin:any;
  userInfo: any;

  loggedInUser:any;
  ngOnInit(){
    this.authService.loadData()
    this.user = this.authService.isLoggedInUser
    this.admin = this.authService.isLoggedInAdmin
  }
  viewPost(){
    this.companyService.myPost() 
  }

  seeYourProfile(){
    const allUsers = JSON.parse(localStorage.getItem("users") ?? "[]");
    const currentUser = JSON.parse(localStorage.getItem("loggedInUser") ?? "{}");

    this.loggedInUser = currentUser;

    // Match by email or username (recommended unique field)
    this.userInfo = allUsers.find((user: any) => user.username === currentUser.username);

    if (this.userInfo) {
    localStorage.setItem("selectedProfile", JSON.stringify(this.userInfo)); // 👈 save user for profile page
    this.router.navigate(['/personalInfo']); // 👈 go to profile page
    }
  }
}
