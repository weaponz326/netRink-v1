import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeachersPageComponent } from './teachers-page.component';
import { AllTeachersComponent } from '../../../components/modules/teachers/all-teachers/all-teachers.component';
import { NewTeacherComponent } from '../../../components/modules/teachers/new-teacher/new-teacher.component';
import { ViewTeacherComponent } from '../../../components/modules/teachers/view-teacher/view-teacher.component';
import { DashboardComponent } from '../../../components/modules/teachers/dashboard/dashboard.component';
import { SettingsComponent } from '../../../components/modules/teachers/settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: TeachersPageComponent,
    children: [
      { path: "", component: TeachersPageComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-teachers", component: AllTeachersComponent },
      { path: "new-teacher", component: NewTeacherComponent },
      { path: "view-teacher", component: ViewTeacherComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersPageRoutingModule { }
