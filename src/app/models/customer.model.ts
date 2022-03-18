export interface Customer {
  id : number;
  firstName : string;
  lastName : string;
  phone : number;
}
export interface createCustomerDTO extends Omit<Customer, 'id'> {

}
export interface updateCustomerDTO extends Partial<createCustomerDTO> {
}
