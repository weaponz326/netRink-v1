import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimetablePageComponent } from './timetable-page.component';
import { AllTimetableComponent } from '../../../components/modules/timetable/all-timetable/all-timetable.component';
import { FullTimetableComponent } from '../../../components/modules/timetable/full-timetable/full-timetable.component';
import { ClassTimetableComponent } from '../../../components/modules/timetable/class-timetable/class-timetable.component';
import { DashboardComponent } from '../../../components/modules/timetable/dashboard/dashboard.component';
import { SettingsComponent } from '../../../components/modules/timetable/settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: TimetablePageComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-timetable", component: AllTimetableComponent },
      { path: "full-timetable", component: FullTimetableComponent },
      { path: "class-timetable", component: ClassTimetableComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimetablePageRoutingModule { }
