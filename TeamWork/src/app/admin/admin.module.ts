import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyService } from './services/company.service';
import { MypostComponent } from './mypost/mypost.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    CompanyDetailsComponent,
    MypostComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CompanyDetailsComponent,
    UserDetailsComponent,
    MypostComponent
  ],
  providers: [
    CompanyService
  ]
})
export class AdminModule { }
