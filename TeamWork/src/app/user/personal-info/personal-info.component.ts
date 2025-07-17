import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {

  users: any[] = [];
  username:any;

  ngOnInit(){
    this.loadUsers();
  }

  clicked(){
    console.log("HI");
  }

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
    this.users.push(this.userRegisterFormGroup.value)
    localStorage.setItem("users", JSON.stringify(this.users));
    console.log(this.users)
    this.userRegisterFormGroup.reset();
    // this.DBService.addUsers(this.userRegisterFormGroup.value)
    // this.authService.submitUserData(this.userRegisterFormGroup.value).subscribe((response: any)=>{
      // console.log(response)
    // })
  }

  loadUsers() {
    this.users = JSON.parse(localStorage.getItem("users") ?? "[]");
    
    const userData = localStorage.getItem('loggedInUser');
    if (userData) {
      this.username = JSON.parse(userData);  // convert string to object
    }
  }
}
