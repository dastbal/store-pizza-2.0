import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule ,FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  emailField = new FormControl('', [Validators.required,Validators.email]);
  passwordField = new FormControl();

  constructor( private authService : AuthService) { }

  ngOnInit(): void {
  }



}
