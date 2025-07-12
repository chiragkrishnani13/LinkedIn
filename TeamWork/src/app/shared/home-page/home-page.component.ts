import { Component } from '@angular/core';
import { CompanyService } from 'src/app/admin/services/company.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  companys:any[] = []
  constructor(private service:CompanyService){

  }
  ngOnInit(){
    this.companys =  this.service.companys
  }

}
