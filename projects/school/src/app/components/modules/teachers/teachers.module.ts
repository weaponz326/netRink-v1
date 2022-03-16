import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { TermsWindowsModule } from '../../select-windows/terms-windows/terms-windows.module';
import { ClassesWindowsModule } from '../../select-windows/classes-windows/classes-windows.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllTeachersComponent } from './all-teachers/all-teachers.component';
import { NewTeacherComponent } from './new-teacher/new-teacher.component';
import { ViewTeacherComponent } from './view-teacher/view-teacher.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllTeachersComponent,
    NewTeacherComponent,
    ViewTeacherComponent,
    TeacherFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    ModuleUtilitiesModule,
    TermsWindowsModule,
    ClassesWindowsModule
  ]
})
export class TeachersModule { }
