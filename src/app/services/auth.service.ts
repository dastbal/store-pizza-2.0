import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { createUserDTO, User } from '../models/user.model';
import { Auth } from '../models/auth.model';
import { BehaviorSubject, Subject, switchMap, tap } from 'rxjs';
import { TokenService } from './token.service';
import { Profile } from '../models/profile.model';
import { Router } from '@angular/router';
import { UsersService } from './users.service';
import { CustomersService } from './customers.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.APi_url}`
  private profileShared =  new BehaviorSubject<Profile|null>(null) ;
  private authStatusListener =  new BehaviorSubject<boolean>(false) ;

  profileShared$ = this.profileShared.asObservable();
  authStatusListener$ = this.authStatusListener.asObservable();


  constructor(
    private http : HttpClient,
    private tokenService :  TokenService,
    private userService :  UsersService,
    private customerService :  CustomersService,
    private router : Router) { }


  register(firstName:string,lastName:string,phone:number,email:string,password:string){
    return this.createCustomer(firstName,lastName,phone)
    .pipe(
      tap( (response)=> {
        return this.createUser(email,password,response.id).subscribe(()=> console.log('sign up'))
      })
    );

  }

  createCustomer(firstName:string,lastName:string,phone:number){
    return this.customerService.create({firstName,lastName,phone})

  }
  createUser(email:string,password:string, customerId: number){
    return this.userService.create({email,password,role:'customer', customerId})

  }

  login(email:string , password : string){
    return this.http.post<Auth>(`${this.apiUrl}/auth/login`,{ email, password})
    .pipe(
      tap( (response)=> {
        this.tokenService.saveToken(response.access_token);
      })
    );

  }
  profile(){
    // let headers = new HttpHeaders();
    // headers.set('Authorization', `Bearer ${token}`)
    return this.http.get(`${this.apiUrl}/profile`)
    .pipe(
      tap((profile)=> {
        this.profileShared.next(profile as Profile);
        this.authStatusListener.next(true);
        this.router.navigate(['']);

      } )
    )

  }
  loginAndGetProfile(email:string , password : string){
    return this.login(email,password)
    .pipe(
      switchMap( ()=> this.profile())
    );

  }

  logout(){
    this.tokenService.removeToken()
    this.authStatusListener.next(false);
    this.router.navigate(['']);



  }



}
