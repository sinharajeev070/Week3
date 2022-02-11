import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() { }

  claimForm!:FormGroup;

  ngOnInit(): void {

    this.claimForm = new FormGroup({
      'fname' : new FormControl(null,Validators.required),
      'lname' : new FormControl(null,Validators.required),
      'email' : new FormControl(null,[Validators.required,Validators.email]),
      'password' : new FormControl(null,[Validators.required,Validators.minLength(6)])
    });
  }

  onClaim(){
    console.log(this.claimForm.value);
    alert("Hello " + this.claimForm.value.fname + " " + this.claimForm.value.lname + "! Your Email " +this.claimForm.value.email + " is eligible for free trial!");
    this.claimForm.reset();
  }

  get fname():any{
    return this.claimForm.get('fname');
  }

  get lname():any{
    return this.claimForm.get('lname');
  }

  get email():any{
    return this.claimForm.get('email');
  }

  get password():any{
    return this.claimForm.get('password');
  }

}
