import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // isLogged: boolean= false;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);

  constructor(private authService : AuthService) { }

  is_valid = false

  ngOnInit(): void {
  }

  login(){
    this.authService.loginAndGetProfile(this.emailFormControl.value,this.passwordFormControl.value)
    .subscribe(
      ()=>{

        // this.isLogged = true;

      }
    )


  }

  disabled() : boolean{
    this.is_valid = this.emailFormControl.valid && this.passwordFormControl.valid
    return !this.is_valid
  }

}
