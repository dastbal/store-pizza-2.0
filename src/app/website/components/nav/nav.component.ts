import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/category.models';
import { Profile } from 'src/app/models/profile.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{

  constructor(
    private storeService : StoreService,
    private authService : AuthService,
    private categoryService : CategoriesService,
    ) {

     }

  isLogged = false;

  profile : Profile | null =  {
    "sub": 1,
    "role": "admin"
  };
   categories : Category[] = [{'id':1,'name':'pizza'}]

  activeMenu =false;
  counter = 0 ;

  ngOnInit(): void {
    this.storeService.cart$.subscribe(pizzas =>{
      this.counter = pizzas.length;
    });

    this.authService.profileShared$
    .subscribe( data =>{
      this.profile = data;

    })

    this.categoryService.getAllCategories()
    .subscribe(data=> this.categories = data)

    this.authService.authStatusListener$
    .subscribe( (res)=>{
      this.isLogged= res
    })

  }
  // ngOnDestroy(): void {
  //   this.authListenerSubs.unsubscribe()
  //  }
  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  //  getProfile(){
  //   this.authService.profile()
  //   .subscribe(data =>{
  //     console.log(data);
  //     this.profile = data as Profile


  //   });
  // }
  logout(){
    this.authService.logout();
    this.profile = null;
    this.isLogged = false;

  }

}
