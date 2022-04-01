import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportsPageComponent } from './reports-page.component';
import { AllReportsComponent } from '../../../components/modules/reports/all-reports/all-reports.component';
import { ClassReportComponent } from '../../../components/modules/reports/class-report/class-report.component';
import { StudentReportComponent } from '../../../components/modules/reports/student-report/student-report.component';
import { DashboardComponent } from '../../../components/modules/reports/dashboard/dashboard.component';
import { SettingsComponent } from '../../../components/modules/reports/settings/settings.component';
import { NewReportComponent } from '../../../components/modules/reports/new-report/new-report.component';

const routes: Routes = [
  {
    path: "",
    component: ReportsPageComponent,
    children: [
      { path: "", component: AllReportsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-reports", component: AllReportsComponent },
      { path: "new-report", component: NewReportComponent },
      { path: "class-report", component: ClassReportComponent },
      { path: "student-report", component: StudentReportComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsPageRoutingModule { }
