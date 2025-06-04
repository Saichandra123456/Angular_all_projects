import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userData:any;
  constructor(private router:Router,private http: HttpClient){}
  loginform =new FormGroup({
    email:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')]),
    password:new FormControl('',[Validators.required,Validators.minLength(7),Validators.pattern('^[A-Z a-z 0-9]*$')],),
  })
  loginuser(){
    if (this.loginform.valid) {
      const userData = this.loginform.value;
      this.router.navigate(['/'], { queryParams: userData,
        skipLocationChange: true}); 
    }
    console.log(this.loginform.value);  
  }
  get email(){
    
    return this.loginform.get('email');
  }
  get password()
  {
    return this.loginform.get('password');
  }
//   showPassword=true;
// togglePasswordVisibility() {
//     this.showPassword = !this.showPassword;
//   }
}
