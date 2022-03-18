/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule ,FormControl, Validators, FormGroup ,FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  constructor(
    private authService : AuthService,
    private formBuilder : FormBuilder) {
      this.builForm();

    }

  form: FormGroup = new FormGroup({});
  is_valid = false

  ngOnInit(): void {
  }

  private builForm(){
    this.form = this.formBuilder.group({
      email :  ['', [Validators.required, Validators.email]],
      password :  ['', [Validators.required, Validators.minLength(6)]],
      firstName :  ['', [Validators.required]],
      lastName :  ['', [Validators.required]],
      phone :  ['', [Validators.required,Validators.minLength(10)]],
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
    return this.form.get('firstName')

  }
  get phone(){
    return this.form.get('phone')

  }

  save(){
    console.log(this.form.value)
    this.authService.register(
      this.firstName?.value,
      this.lastName?.value,
      this.phone?.value,
      this.email?.value,
      this.password?.value,
    )
    .subscribe(()=>
    console.log('sign up 1'))

  }





}
