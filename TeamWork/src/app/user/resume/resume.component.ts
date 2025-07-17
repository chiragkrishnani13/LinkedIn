import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  isEditMode: boolean = false;
  username:any;

  ngOnInit(){
    this.userResumeFormGroup.disable(); // Disable all controls initially
    this.loadUsers();
  }

  userResumeFormGroup = new FormGroup({
  college: new FormControl('VJTI', [Validators.required,Validators.minLength(3)]),

  degree: new FormControl('B.Tech in Computer Engineering', [Validators.required,Validators.minLength(3)]),

  gradYear: new FormControl('2025', [Validators.required,Validators.pattern(/^\d{4}$/)]), // ensures it's a 4-digit year

  skills: new FormControl('Angular, JavaScript, SQL', [Validators.required,Validators.minLength(3)]),

//  interests: new FormControl([], [Validators.required]),
interests: new FormControl<string[]>([], [Validators.required]),

  experience: new FormControl('Intern at ABC Corp, 6 months', [Validators.required,Validators.minLength(5)]),

  projects: new FormControl('Portfolio Website, Chatbot', [Validators.required,Validators.minLength(5)])
  
  });


    getFormControl(name:string){
      return this.userResumeFormGroup.get(name)
    }

    isFormControlError(name:string){
      return this.getFormControl(name)?.dirty && this.getFormControl(name)?.errors?.['required']
    }

    enableEditMode() {
      this.isEditMode = true;
      this.userResumeFormGroup.enable();
    }

    // isUserLoggedIn(){
    //   return this.authService.userAuthStatus();
    // }

    submitResumeData(){
      console.log(this.userResumeFormGroup.value)
      // this.authService.submitUserData(this.userRegisterFormGroup.value).subscribe((response: any)=>{
        // console.log(response)
      // })

    this.userResumeFormGroup.disable();  // Lock the form again
    this.isEditMode = false;
  }

  loadUsers(){
    const userData = localStorage.getItem('loggedInUser');
    if (userData) {
      this.username = JSON.parse(userData);  // convert string to object
    }
  }
}
