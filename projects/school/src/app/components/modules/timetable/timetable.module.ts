import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { TermsWindowsModule } from '../../select-windows/terms-windows/terms-windows.module';
import { SubjectsWindowsModule } from '../../select-windows/subjects-windows/subjects-windows.module';
import { ClassesWindowsModule } from '../../select-windows/classes-windows/classes-windows.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllTimetableComponent } from './all-timetable/all-timetable.component';
import { NewTimetableComponent } from './new-timetable/new-timetable.component';
import { ClassTimetableComponent } from './class-timetable/class-timetable.component';
import { EditTimetableComponent } from './edit-timetable/edit-timetable.component';
import { FullTimetableComponent } from './full-timetable/full-timetable.component';
import { AddPeriodComponent } from './add-period/add-period.component';
import { TimetableFormComponent } from './timetable-form/timetable-form.component';
import { TimetableClassesComponent } from './timetable-classes/timetable-classes.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllTimetableComponent,
    NewTimetableComponent,
    ClassTimetableComponent,
    EditTimetableComponent,
    FullTimetableComponent,
    AddPeriodComponent,
    TimetableFormComponent,
    TimetableClassesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    ModuleUtilitiesModule,
    TermsWindowsModule,
    SubjectsWindowsModule,
    ClassesWindowsModule
  ]
})
export class TimetableModule { }
