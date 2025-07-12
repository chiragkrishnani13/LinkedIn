import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { 
    this.getCompany()
  }
  companys:any[] = []
  companyCount:any = 0
  insertCompany(data:any){
    this.companyCount++
    let company={
      ...data,
      id:this.companyCount
    }
    this.companys.push(company)
    localStorage.setItem("companys",JSON.stringify(this.companys))
  }
  getCompany(){
    this.companys = JSON.parse(localStorage.getItem("companys")??"[]")

  }
}
