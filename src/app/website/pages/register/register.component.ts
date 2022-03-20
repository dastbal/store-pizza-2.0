/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule ,FormControl, Validators, FormGroup ,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Myvalidators } from 'src/utils/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  constructor(
    private authService : AuthService,
    private formBuilder : FormBuilder,
    private router : Router) {
      this.builForm();

    }

  form: FormGroup = new FormGroup({});
  is_valid = false
  hide = true;



  ngOnInit(): void {
  }

  private builForm(){
    this.form = this.formBuilder.group({
      email :  ['', [Validators.required, Validators.email]],
      password :  ['', [Validators.required, Validators.minLength(6), Myvalidators.validPassword]],
      confirmPassword :  ['', [Validators.required]],
      firstName :  ['', [Validators.required]],
      lastName :  ['', [Validators.required]],
      phone :  ['', [Validators.required,Validators.minLength(10)]],
    },{
      Validators: Myvalidators.matchPassword
    });
  }
  get firstName(){
    return this.form.get('firstName')

  }
  get lastName(){
    return this.form.get('lastName')

  }
  get email(){
    return this.form.get('email')

  }
  get password(){
    return this.form.get('password')

  }
  get confirmPassword(){
    return this.form.get('confirmPassword')

  }
  get phone(){
    return this.form.get('phone')

  }

  register(){
    this.authService.register(
      this.firstName?.value,
      this.lastName?.value,
      this.phone?.value,
      this.email?.value,
      this.password?.value,
    ).subscribe(()=>
    this.router.navigate(['login/']))
  }


  save(){
    console.log(this.form.value)
    this.register()  }






}
