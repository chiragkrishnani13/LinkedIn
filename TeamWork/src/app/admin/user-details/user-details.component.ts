import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  applicationForm: FormGroup;

  constructor(private fb: FormBuilder,private companyServices:CompanyService) {
    this.applicationForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: [''],
      position: ['', Validators.required],
      experience: ['', Validators.required],
      expectedSalary: [''],
      coverLetter: [''],
      resume: [null]
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.applicationForm.patchValue({ resume: file });
    }
  }

  submitApplication() {
    if (this.applicationForm.valid) {
      this.companyServices.insertApplication(this.applicationForm.value)
      
    }
  }
  

}
