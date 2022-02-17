import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSettingsPageRoutingModule } from './user-settings-page-routing.module';
import { UserSettingsPageComponent } from './user-settings-page.component';


@NgModule({
  declarations: [
    UserSettingsPageComponent
  ],
  imports: [
    CommonModule,
    UserSettingsPageRoutingModule
  ]
})
export class UserSettingsPageModule { }
