import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllReportsComponent } from './all-reports/all-reports.component';
import { NewReportComponent } from './new-report/new-report.component';
import { ClassReportComponent } from './class-report/class-report.component';
import { ClassSheetComponent } from './class-sheet/class-sheet.component';
import { StudentReportComponent } from './student-report/student-report.component';
import { ReportAssessmentsComponent } from './report-assessments/report-assessments.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllReportsComponent,
    NewReportComponent,
    ClassReportComponent,
    ClassSheetComponent,
    StudentReportComponent,
    ReportAssessmentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    ModuleUtilitiesModule
  ]
})
export class ReportsModule { }
