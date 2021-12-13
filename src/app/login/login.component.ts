import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform = new FormGroup({
    email:new FormControl(''),
    pass:new FormControl(''),
  })

  loginUser(){
    console.warn(this.loginform.value)
  }

  constructor(private formBuilder: FormBuilder) {}

  // checkoutForm = this.formBuilder.group({
  //   email: '',
  //   pass: ''
  // });

  // onSubmit(): void {
  //   // Process checkout data here
  //   console.warn(`Your order has been submitted `, this.checkoutForm.value);  //
  //   this.checkoutForm.reset();
  
  // }
  ngOnInit(): void {

  }

  

}
