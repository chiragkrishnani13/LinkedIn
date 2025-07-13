import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/admin/services/company.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  companys: any[] = [];
  
  constructor(private service: CompanyService) {}
  
  ngOnInit() {
    // Get company data from service
    this.companys = this.service.companys || [];
    console.log('Loaded companies:', this.companys);
    
    // Add default tags to company data if not present
    this.companys.forEach(company => {
      if (!company.tags) {
        company.tags = ['Full-time', 'Remote', 'Professional'];
      }
    });
  }
}
