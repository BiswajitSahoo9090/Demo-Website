import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-evalution',
  standalone: true,
  imports: [MatFormFieldModule,ReactiveFormsModule,CommonModule,NgSelectModule],
  templateUrl: './evalution.component.html',
  styleUrl: './evalution.component.css'
})
export class EvalutionComponent {

  medicalForm:any;
  selectedGender:any;
  constructor(private formBuilder:FormBuilder){

  }
  ngOnInit(){
    this.initializedForm()

    this.medicalForm.get('gender').valueChanges.subscribe((value:string) =>
    {
      this.selectedGender=value;
      console.log("selectedGender",this.selectedGender);
    })
     
  }

  initializedForm(){
    this.medicalForm=this.formBuilder.group({
      name:['',[Validators.required, Validators.pattern(/^.{1,50}$/)]],
      age:['',[Validators.required,Validators.min(1),Validators.max(100)]],
      gender:['',Validators.required],
      address:['',Validators.required],
      diagnosis:['',Validators.required],
      contact:['',Validators.required,Validators.pattern('^[0-9]{10}$')],
      email:['',Validators.required,Validators.email],
      personalHistory:[''],
      familyHistory:[''],
      painScore:['']

    })
  }
  submitForm(){
    if(this.medicalForm){
      console.log("Form is Submitted",this.medicalForm.value);
    }
  }
  onGenderChange(event:any){

    console.log("onGenderChange",event);
    console.log("onGenderChange target",event.target);
    console.log("onGenderChange value",event.target.value);

    this.selectedGender=event.target.value
    
  }


}
