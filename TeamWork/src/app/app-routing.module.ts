import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CompanyDetailsComponent } from './admin/company-details/company-details.component';
import { HomePageComponent } from './shared/home-page/home-page.component';
import { SinglePostComponent } from './shared/single-post/single-post.component';
import { SharedComponent } from './shared/shared.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: SharedComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'companyDetails', component: CompanyDetailsComponent },
  { path: 'single-post/:id', component: SinglePostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
