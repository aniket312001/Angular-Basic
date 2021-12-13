import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeloginComponent } from './college/employeelogin/employeelogin.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  // {path: "",component:AppComponent},
  {path: "",component:EmployeeloginComponent},
  {path:"student",component:StudentComponent},
  {path:"register",component:RegistrationComponent},
  {path:"login",component:LoginComponent},
  {path:"**",component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
