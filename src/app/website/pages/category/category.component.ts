import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzasService } from 'src/app/services/pizzas.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryId : string |null = null;
  pizzaId : string | null = null;

  pizzas : Pizza[]= [ ];
  // showDetail = false;
  limit = 6 ;
  offset = 0 ;

  constructor(private route : ActivatedRoute ,
    private pizzaService : PizzasService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.categoryId = params.get('categoryId');
      if(this.categoryId){

        this.pizzaService.getbyCategory(this.categoryId,this.limit,this.offset)
        .subscribe( (data)=>{ this.pizzas =data })
      }

    })
    this.route.queryParamMap
    .subscribe( params =>{
      this.pizzaId = params.get('pizza');
      console.log(this.pizzaId);
    })

  }

}
