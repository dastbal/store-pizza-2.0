export interface User {
  id : string;
  email : string;
  role: string;
  customerId? : number;
}
export interface createUserDTO extends Omit<User, 'id'> {
  password : string;

}
export interface updatePizzaDTO extends Partial<createUserDTO> {
}
