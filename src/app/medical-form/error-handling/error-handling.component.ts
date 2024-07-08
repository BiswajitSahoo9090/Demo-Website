import { Component } from '@angular/core';

@Component({
  selector: 'app-error-handling',
  standalone: true,
  imports: [],
  templateUrl: './error-handling.component.html',
  styleUrl: './error-handling.component.css'
})
export class ErrorHandlingComponent {

  constructor(){
this.errorhandling();
  }

  sampleError(){

    let x:number=null!;
    console.log("Sample",x);
    throw new Error("Error message Shown");
  }
  
 errorhandling(){
    try{
let result=this.sampleError();
console.log("Reult" ,result);

    }
    catch(error:any){

      console.error("Type error",error.message)
    }
    finally{
console.log("Finally");
    }
  }

}
