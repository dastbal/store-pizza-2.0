import { Category } from "./category.models";

export interface Pizza {
  id : string;
  name:  string;
  description : string;
  image : string;
  price : number;
  categoryId : number;
  ingredientsId : number[];
}
export interface createPizzaDTO extends Omit<Pizza, 'id'> {
}
export interface updatePizzaDTO extends Partial<createPizzaDTO> {
}
