import { AbstractControl } from "@angular/forms";

export class Myvalidators{


  static validPassword(control : AbstractControl ){
    const value = control.value;
    if(!containNumber(value)){
      return{invalid_password:true}
    }


    return null;
  }

  static matchPassword(control : AbstractControl){
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if(password !== confirmPassword){
      return{match : true}
    }
    return null
  }
}
function containNumber(value :string){
  return value.split('').find(v=> isNumber(v)) !== undefined
}
function isNumber(value : string){
  return!isNaN(parseInt(value,10))
}
