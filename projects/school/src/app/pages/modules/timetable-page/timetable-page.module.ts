import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimetablePageRoutingModule } from './timetable-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';
import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { TimetableModule } from '../../../components/modules/timetable/timetable.module';

import { TimetablePageComponent } from './timetable-page.component';


@NgModule({
  declarations: [
    TimetablePageComponent
  ],
  imports: [
    CommonModule,
    TimetablePageRoutingModule,
    MainNavbarModule,
    ModuleUtilitiesModule,
    TimetableModule
  ]
})
export class TimetablePageModule { }
