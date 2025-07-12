import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', redirectTo: '/login', pathMatch: 'full' } // Temporary redirect until home page is created
=======
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
>>>>>>> 5d332da5acb61780aacfa2a81e29224f0a22f174
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
