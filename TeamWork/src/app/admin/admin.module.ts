import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyService } from './services/company.service';

@NgModule({
  declarations: [
    CompanyDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CompanyDetailsComponent
  ],
  providers: [
    CompanyService
  ]
})
export class AdminModule { }
