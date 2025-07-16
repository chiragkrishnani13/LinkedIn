import { Component } from '@angular/core';
import { CompanyService } from 'src/app/admin/services/company.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authService:AuthService,private companyService:CompanyService){

  }
  user:any;
  admin:any;
  ngOnInit(){
    this.authService.loadData()
    this.user = this.authService.isLoggedInUser
    this.admin = this.authService.isLoggedInAdmin
  }
  viewPost(){
    this.companyService.myPost()
    
  }

}
