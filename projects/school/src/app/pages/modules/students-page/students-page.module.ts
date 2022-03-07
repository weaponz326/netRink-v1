import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsPageRoutingModule } from './students-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';
import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { StudentsModule } from '../../../components/modules/students/students.module';

import { StudentsPageComponent } from './students-page.component';


@NgModule({
  declarations: [
    StudentsPageComponent
  ],
  imports: [
    CommonModule,
    StudentsPageRoutingModule,
    MainNavbarModule,
    ModuleUtilitiesModule,
    StudentsModule
  ]
})
export class StudentsPageModule { }
