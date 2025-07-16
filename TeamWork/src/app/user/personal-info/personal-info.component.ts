import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {

  userRegisterFormGroup = new FormGroup({
    gender : new FormControl('F'),
    firstName : new FormControl('nidhi',[Validators.required,Validators.minLength(3)]),
    lastName : new FormControl('gajwani',[Validators.required,Validators.minLength(3)]),
    email : new FormControl('nidhix@gmail.com',[Validators.required,Validators.email]),
    address : new FormControl('nidhi',[Validators.required,Validators.minLength(10)]),
    phoneNo : new FormControl('9833243230',[Validators.required,Validators.minLength(3)]),
    // confirmPassword:new FormControl('nnn',[Validators.required,Validators.minLength(3)]),
    dob :new FormControl('20005-11-30'),
    country : new FormControl('India',[Validators.required]),
    postalCode : new FormControl('421003',[Validators.required,Validators.minLength(5)]),
    // profileImage : new FormControl(''),
    // bio : new FormControl('test'),
  })

  getFormControl(name:string){
    return this.userRegisterFormGroup.get(name)
  }

  isFormControlError(name:string){
    return this.getFormControl(name)?.dirty && this.getFormControl(name)?.errors?.['required']
  }

  // isUserLoggedIn(){
  //   return this.authService.userAuthStatus();
  // }

  submitData(){
    console.log(this.userRegisterFormGroup.value)
    // this.DBService.addUsers(this.userRegisterFormGroup.value)
    // this.authService.submitUserData(this.userRegisterFormGroup.value).subscribe((response: any)=>{
      // console.log(response)
    // })
  }

}
