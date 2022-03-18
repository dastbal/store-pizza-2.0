import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaComponent } from './components/pizza/pizza.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { ImgComponent } from './components/img/img.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    PizzaComponent,
    PizzasComponent,
    ImgComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule,
    MatCardModule,
    MatButtonModule

  ],
  exports:[
    PizzaComponent,
    PizzasComponent,
    ImgComponent,
    HighlightDirective

  ]
})
export class SharedModule { }
