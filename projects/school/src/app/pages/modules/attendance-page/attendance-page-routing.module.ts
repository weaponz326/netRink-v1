import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AttendancePageComponent } from './attendance-page.component';
import { AllAttendanceComponent } from '../../../components/modules/attendance/all-attendance/all-attendance.component';
import { ViewAttendanceComponent } from '../../../components/modules/attendance/view-attendance/view-attendance.component';
import { CheckAttendanceComponent } from '../../../components/modules/attendance/check-attendance/check-attendance.component';
import { DashboardComponent } from '../../../components/modules/attendance/dashboard/dashboard.component';
import { SettingsComponent } from '../../../components/modules/attendance/settings/settings.component';

const routes: Routes = [
  {
    path: "",
    component: AttendancePageComponent,
    children: [
      { path: "", component: AttendancePageComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-attendance", component: AllAttendanceComponent },
      { path: "view-attendance", component: ViewAttendanceComponent },
      { path: "check-attendance", component: CheckAttendanceComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendancePageRoutingModule { }
