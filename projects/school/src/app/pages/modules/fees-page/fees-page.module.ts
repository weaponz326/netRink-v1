import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeesPageRoutingModule } from './fees-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';
import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { FeesModule } from '../../../components/modules/fees/fees.module';

import { FeesPageComponent } from './fees-page.component';


@NgModule({
  declarations: [
    FeesPageComponent
  ],
  imports: [
    CommonModule,
    FeesPageRoutingModule,
    MainNavbarModule,
    ModuleUtilitiesModule,
    FeesModule
  ]
})
export class FeesPageModule { }
