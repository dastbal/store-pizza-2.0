export interface Ingredient {
  id : string;
  name:  string;

}
export interface createIngredientDTO extends Omit<Ingredient, 'id'> {
}
export interface updateIngredientDTO extends Partial<createIngredientDTO> {
}
