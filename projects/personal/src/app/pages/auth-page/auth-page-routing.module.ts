import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthPageComponent } from './auth-page.component';
import { LoginFormComponent } from '../../components/auth-forms/login-form/login-form.component';
import { SignupFormComponent } from '../../components/auth-forms/signup-form/signup-form.component';
import { RecoveryFormComponent } from '../../components/auth-forms/recovery-form/recovery-form.component';


const routes: Routes = [
  {
    path: "",
    component: AuthPageComponent,
    children: [
      { path: "login", component: LoginFormComponent },
      { path: "signup", component: SignupFormComponent },
      { path: "recovery", component: RecoveryFormComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthPageRoutingModule { }
