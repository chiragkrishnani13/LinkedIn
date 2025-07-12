import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/admin/services/company.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {
  id:any
  post:any
  constructor( private activateRoute:ActivatedRoute,private companyService:CompanyService){
    this.id = Number(this.activateRoute.snapshot.paramMap.get('id'))
  }
  ngOnInit(){
    this.getDetails()
  }
  getDetails(){
    this.post = this.companyService.companys.filter((elem)=>elem.id === this.id)
    console.log(this.post);
  }

}
