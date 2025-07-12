import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent {

  companyDetails = new FormGroup({
    companyName:new FormControl('',[Validators.required]),
    companyLogo:new FormControl('',[Validators.required]),
    roleDetails:new FormControl('',[Validators.required]),
    role:new FormControl('',[Validators.required]),
    jobDetails:new FormControl('',[Validators.required]),
    requirements:new FormControl('',[Validators.required]),
    durationFrom:new FormControl('',[Validators.required]),
    durationTo:new FormControl('',[Validators.required]),
    location:new FormControl('',[Validators.required]),

  })
  constructor(private companyService:CompanyService ){

  }
  isRequired(name:string){
    return this.companyDetails.get(name)?.errors?.['required'] && this.companyDetails.get(name)?.invalid && this.companyDetails.get(name)?.touched
  }

  submitData(){
    this.companyService.insertCompany(this.companyDetails.value)
  }

}
