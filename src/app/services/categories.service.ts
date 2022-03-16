import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category.models';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiUrl = `${environment.APi_url}/categories`;


  constructor( private http: HttpClient) { }
  getAllCategories(){

    return this.http.get<Category[]>(this.apiUrl).pipe(
      retry(2),
      // map(pizzas =>  pizzas.map(pizza =>{
      //   return{
      //     ...pizza,
      //     taxes: pizza.price * 1.12
      //   }
      // }) )
    );
  }
}
