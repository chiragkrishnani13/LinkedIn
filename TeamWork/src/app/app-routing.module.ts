import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CompanyDetailsComponent } from './admin/company-details/company-details.component';
import { SharedComponent } from './shared/shared.component';
import { SinglePostComponent } from './shared/single-post/single-post.component';

const routes: Routes = [
  {
    path:"navbar",
    component:NavbarComponent
  },
  {
    path:"companyDetails",
    component:CompanyDetailsComponent
  },
  {
    path:"home",
    component:SharedComponent
  },
  {
    path:'single-post/:id',
    component:SinglePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
