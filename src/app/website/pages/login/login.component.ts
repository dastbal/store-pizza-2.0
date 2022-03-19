import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private authService : AuthService,
    private formBuilder : FormBuilder) {
    this.builForm();


  }
  private builForm(){
    this.form = this.formBuilder.group({
      email :  ['', [Validators.required, Validators.email]],
      password :  ['', [Validators.required, Validators.minLength(6)]],
    });
  }

form: FormGroup = new FormGroup({});



  hide = true;
  is_valid = false

  ngOnInit(): void {
  }
  get email(){
    return this.form.get('email')

  }
  get password(){
    return this.form.get('password')

  }

  login(){
    this.authService.loginAndGetProfile(this.form.get('email')?.value,this.form.get('password')?.value)
    .subscribe(
      ()=>{
        console.log('Log In')
      }
    )


  }
  save(){
    console.log(this.form.value)
    this.login()

  }



}
