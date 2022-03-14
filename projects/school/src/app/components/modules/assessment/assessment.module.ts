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
import { AllAssessmentComponent } from './all-assessment/all-assessment.component';
import { NewAssessmentComponent } from './new-assessment/new-assessment.component';
import { ViewAssessmentComponent } from './view-assessment/view-assessment.component';
import { AssessmentFormComponent } from './assessment-form/assessment-form.component';
import { AssessmentTableComponent } from './assessment-table/assessment-table.component';
import { AssessmentClassesComponent } from './assessment-classes/assessment-classes.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllAssessmentComponent,
    NewAssessmentComponent,
    ViewAssessmentComponent,
    AssessmentFormComponent,
    AssessmentTableComponent,
    AssessmentClassesComponent
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
export class AssessmentModule { }
