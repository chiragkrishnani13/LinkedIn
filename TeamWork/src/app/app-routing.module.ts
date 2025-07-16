import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { CompanyDetailsComponent } from './admin/company-details/company-details.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { SinglePostComponent } from './share/single-post/single-post.component';
import { HomePageComponent } from './share/home-page/home-page.component';
import { MypostComponent } from './admin/mypost/mypost.component';
import { UserDetailsComponent } from './admin/user-details/user-details.component';
import { PersonalInfoComponent } from './user/personal-info/personal-info.component';
import { ResumeComponent } from './user/resume/resume.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomePageComponent},
  { path: 'navbar', component: NavbarComponent },
  { path: 'companyDetails', component: CompanyDetailsComponent },
  { path: 'single-post/:id', component: SinglePostComponent },
  {path:'mypost',component:MypostComponent},
  {path:'candiateDetails/:id',component:UserDetailsComponent},
  {path:'personalInfo',component:PersonalInfoComponent},
  {path:'resume',component:ResumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
