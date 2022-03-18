import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { createCustomerDTO, Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private apiUrl = `${environment.APi_url}/customers`

  constructor( private http : HttpClient) { }
  create(newCustomer : createCustomerDTO){
    return this.http.post<Customer>( this.apiUrl,newCustomer);
  }
  getAll(){
    return this.http.get<Customer[]>( this.apiUrl);
  }
}
