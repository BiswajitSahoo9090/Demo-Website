import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvalutionComponent } from './evalution/evalution.component';
import { ExampleComponent } from './example/example.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';


const routes: Routes = [
  {path: 'evaluation',component:EvalutionComponent},
  {path:'example',component:ExampleComponent},
  {path:'error-handling',component:ErrorHandlingComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalFormRoutingModule { }
