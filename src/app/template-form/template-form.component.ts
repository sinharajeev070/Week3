import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  objArr:any[] = [];
  constructor() { }
 
  onClaim(claim:any){
    console.log(claim.value);
    alert("Hello " + claim.value.fName + " " + claim.value.lName + "! Your Email " + claim.value.email + " is eligible for free trial!");
    claim.reset();
   
  }
  
  ngOnInit(): void {
  }

}
