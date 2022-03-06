import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';

import { FormHeaderComponent } from './form-header/form-header.component';
import { FormFooterComponent } from './form-footer/form-footer.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RecoveryFormComponent } from './recovery-form/recovery-form.component';
import { SignupSuccessComponent } from './signup-success/signup-success.component';
import { ResetSuccessComponent } from './reset-success/reset-success.component';



@NgModule({
  declarations: [
    FormHeaderComponent,
    FormFooterComponent,
    SignupFormComponent,
    LoginFormComponent,
    RecoveryFormComponent,
    SignupSuccessComponent,
    ResetSuccessComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
  ],
  exports: [
    FormHeaderComponent,
    FormFooterComponent,
  ]
})
export class AuthFormsModule { }
