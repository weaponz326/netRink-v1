import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentsPageComponent } from './students-page.component';
import { AllStudentsComponent } from '../../../components/modules/students/all-students/all-students.component';
import { NewStudentComponent } from '../../../components/modules/students/new-student/new-student.component';
import { ViewStudentComponent } from '../../../components/modules/students/view-student/view-student.component';
import { DashboardComponent } from '../../../components/modules/students/dashboard/dashboard.component';
import { SettingsComponent } from '../../../components/modules/students/settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: StudentsPageComponent,
    children: [
      { path: "", component: AllStudentsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-students", component: AllStudentsComponent },
      { path: "new-student", component: NewStudentComponent },
      { path: "view-student", component: ViewStudentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsPageRoutingModule { }
