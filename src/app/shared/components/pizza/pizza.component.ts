import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pizza } from 'src/app/models/pizza.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  isLogged = false

  constructor(private authService : AuthService){}
  @Input()
  pizza : Pizza ={
    id:'djdj5',
    name: 'Pizza',
    description : 'Delicous',
    image : 'https://picsum.photos/200',
    price : 10,
    categoryId: 1,
    ingredientsId :[1,2]

  };

  @Output()
  pizzaAdded = new EventEmitter<Pizza>();
  @Output()
  pizzaDetail = new EventEmitter<string>();

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    this.authService.authStatusListener$
    .subscribe( (res)=>{
      this.isLogged= res
    })

  }


  onAddToCart(){
    this.pizzaAdded.emit(this.pizza);

  }
  showDetail(){
    this.pizzaDetail.emit(this.pizza.id);

  }

}
