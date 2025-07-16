import { Component } from '@angular/core';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent {
  constructor(private companyService:CompanyService){

  }
  companys!:any
  ngOnInit(){
    this.companys = this.companyService.myPost()
    
  }

}
