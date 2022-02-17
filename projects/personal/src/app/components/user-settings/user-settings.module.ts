import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule
  ]
})
export class UserSettingsModule { }
