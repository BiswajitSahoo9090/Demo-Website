import { ChangeDetectorRef, Component } from '@angular/core';

interface Product{
  id:number,
  name:string,
  price:number,
  quantity:number
};
enum Direction{
  Up=5,
  Down,
  Left,
  Right
}

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {
  ngOnInit(){
    this.enums();
  }

  message="Initial Message";
  constructor(private cdr:ChangeDetectorRef){
// this.startTimeout();
// this.startInterval();
  }

//   startTimeout(){
// setTimeout(() =>
//   {
//     console.log("Timeoutt completed!!!");
//   },3000);
//   }

//   startInterval(){
// setInterval(()=>
//   {
// console.log("Set Interval Completed")
// },3000)
//   }
updateMessage(){
  this.message="Update message"
  this.cdr.detectChanges();
}
 product:Product[]=[
  {
    id:1,
    name:"Biswajit",
    price:1200,
    quantity:5

  },
 
 ]
 enums(){
  let direction:Direction;
  direction=Direction.Left
  console.log(direction);
 }

}
