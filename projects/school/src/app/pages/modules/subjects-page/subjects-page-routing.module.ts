import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubjectsPageComponent } from './subjects-page.component';
import { AllSubjectsComponent } from '../../../components/modules/subjects/all-subjects/all-subjects.component';
import { AddSubjectComponent } from '../../../components/modules/subjects/add-subject/add-subject.component';
import { ViewSubjectComponent } from '../../../components/modules/subjects/view-subject/view-subject.component';
import { DashboardComponent } from '../../../components/modules/subjects/dashboard/dashboard.component';
import { SettingsComponent } from '../../../components/modules/subjects/settings/settings.component';

const routes: Routes = [
  {
    path: "",
    component: SubjectsPageComponent,
    children: [
      { path: "", component: AllSubjectsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-subjects", component: AllSubjectsComponent },
      { path: "add-subject", component: AddSubjectComponent },
      { path: "view-subject", component: ViewSubjectComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectsPageRoutingModule { }
