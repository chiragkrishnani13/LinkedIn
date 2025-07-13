import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { 
    this.loadData()
  }
  companys:any[] = []
  companyCount:any = 0
  loadData(){
    this.companyCount =Number(localStorage.getItem('companyCount') ?? 1)
    this.companys = JSON.parse(localStorage.getItem("companys")??"[]")

    
  }
  insertCompany(data:any){
    this.companyCount++
    let company={
      ...data,
      id:this.companyCount
    }
    this.companys.push(company)
    localStorage.setItem("companys",JSON.stringify(this.companys))
    localStorage.setItem('companyCount',this.companyCount.toString())
  }
  getCompany(){
    this.companys = JSON.parse(localStorage.getItem("companys")??"[]")

  }
}
