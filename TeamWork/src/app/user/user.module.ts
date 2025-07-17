import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ResumeComponent } from './resume/resume.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PersonalInfoComponent,
    ResumeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
