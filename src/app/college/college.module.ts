import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';



@NgModule({
  declarations: [
    EmployeeloginComponent  
  ],
  imports: [
    CommonModule
  ],
  exports : [
    EmployeeloginComponent  // ----- to add template in main page
  ]
})
export class CollegeModule { }

