import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSettingsPageRoutingModule } from './user-settings-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';
import { ModuleUtilitiesModule } from '../../components/module-utilities/module-utilities.module';
import { UserSettingsModule } from '../../components/user-settings/user-settings.module';

import { UserSettingsPageComponent } from './user-settings-page.component';


@NgModule({
  declarations: [
    UserSettingsPageComponent
  ],
  imports: [
    CommonModule,
    UserSettingsPageRoutingModule,
    MainNavbarModule,
    ModuleUtilitiesModule,
    UserSettingsModule,
  ]
})
export class UserSettingsPageModule { }
