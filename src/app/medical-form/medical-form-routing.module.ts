import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvalutionComponent } from './evalution/evalution.component';


const routes: Routes = [
  {path: 'evaluation',component:EvalutionComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicalFormRoutingModule { }
