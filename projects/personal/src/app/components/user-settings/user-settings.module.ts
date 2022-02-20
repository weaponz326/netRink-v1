import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModuleUtilitiesModule } from '../module-utilities/module-utilities.module';

import { ChangeEmailComponent } from './change-email/change-email.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { EnableTwoFaComponent } from './enable-two-fa/enable-two-fa.component';



@NgModule({
  declarations: [
    ChangeEmailComponent,
    ResetPasswordComponent,
    EnableTwoFaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ModuleUtilitiesModule
  ],
  exports: [
    ChangeEmailComponent,
    ResetPasswordComponent,
    EnableTwoFaComponent
  ],
})
export class UserSettingsModule { }
