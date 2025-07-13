import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailsComponent } from './admin/company-details/company-details.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { SinglePostComponent } from './shared/single-post/single-post.component';
// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
   {
    path:'companyDetails',
    component:CompanyDetailsComponent
   },
   {
    path:'home',
    component:HomePageComponent
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
