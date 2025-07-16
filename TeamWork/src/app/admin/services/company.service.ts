import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private authService:AuthService) { 
    this.loadData()
  }
  companys:any[] = []
  applicants:any[] = []
  companyCount:any = 0
  applicantsCount:any = 0
  loadData(){
    this.companyCount =Number(localStorage.getItem('companyCount') ?? 1)
    this.companys = JSON.parse(localStorage.getItem("companys")??"[]")
    this.applicants = JSON.parse(localStorage.getItem("applicants")??'[]')
    this.applicantsCount = Number(localStorage.getItem('applicantsCount') ?? 1)


    
  }
  insertCompany(data:any){
    this.companyCount++
    let company={
      ...data,
      id:this.companyCount,
      username:this.authService.LoggedInUser
    }
    this.companys.push(company)
    localStorage.setItem("companys",JSON.stringify(this.companys))
    localStorage.setItem('companyCount',this.companyCount.toString())
  }
  getCompany(){
    this.companys = JSON.parse(localStorage.getItem("companys")??"[]")
  }
  myPost(){
    this.authService.loadData()
    let user = this.companys.filter((elem)=>elem.username.username == this.authService.LoggedInUser.username)
    return user;
  }
  insertApplication(data:any){
    this.authService.loadData
    let applicant = {
      ...data,
      username:this.authService.LoggedInUser
    }
    this.applicants.push(applicant)
    console.log(this.applicants);

    // localStorage.setItem("applicants",JSON.stringify(this.applicants))
    localStorage.setItem('applicantsCount',this.companyCount.toString())
  }
  specficCompanyApplicant(companyId:Number,applicantUsername:any){


  }

}
