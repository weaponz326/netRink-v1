import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsPageRoutingModule } from './reports-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';
import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { ReportsModule } from '../../../components/modules/reports/reports.module';

import { ReportsPageComponent } from './reports-page.component';


@NgModule({
  declarations: [
    ReportsPageComponent
  ],
  imports: [
    CommonModule,
    ReportsPageRoutingModule,
    MainNavbarModule,
    ModuleUtilitiesModule,
    ReportsModule
  ]
})
export class ReportsPageModule { }
