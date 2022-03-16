export interface Category {
  id : number;
  name:  string;

}
export interface createCategoryDTO extends Omit<Category, '_id'> {
}
export interface updateCategoryDTO extends Partial<createCategoryDTO> {
}
