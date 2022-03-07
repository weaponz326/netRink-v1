import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssessmentPageComponent } from './assessment-page.component';
import { AllAssessmentComponent } from '../../../components/modules/assessment/all-assessment/all-assessment.component';
import { NewAssessmentComponent } from '../../../components/modules/assessment/new-assessment/new-assessment.component';
import { ViewAssessmentComponent } from '../../../components/modules/assessment/view-assessment/view-assessment.component';
import { DashboardComponent } from '../../../components/modules/assessment/dashboard/dashboard.component';
import { SettingsComponent } from '../../../components/modules/assessment/settings/settings.component';

const routes: Routes = [
  {
    path: "",
    component: AssessmentPageComponent,
    children: [
      { path: "", component: AllAssessmentComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-assessment", component: AllAssessmentComponent },
      { path: "new-assessment", component: NewAssessmentComponent },
      { path: "view-assessment", component: ViewAssessmentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssessmentPageRoutingModule { }
