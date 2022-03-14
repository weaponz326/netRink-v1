import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { TermsWindowsModule } from '../../select-windows/terms-windows/terms-windows.module';
import { ClassesWindowsModule } from '../../select-windows/classes-windows/classes-windows.module';
import { TeachersWindowsModule } from '../../select-windows/teachers-windows/teachers-windows.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllSubjectsComponent } from './all-subjects/all-subjects.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { ViewSubjectComponent } from './view-subject/view-subject.component';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { SubjectTeachersComponent } from './subject-teachers/subject-teachers.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllSubjectsComponent,
    AddSubjectComponent,
    ViewSubjectComponent,
    SubjectFormComponent,
    SubjectTeachersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    ModuleUtilitiesModule,
    TermsWindowsModule,
    ClassesWindowsModule,
    TeachersWindowsModule
  ]
})
export class SubjectsModule { }
