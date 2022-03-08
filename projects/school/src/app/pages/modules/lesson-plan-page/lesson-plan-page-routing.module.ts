import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LessonPlanPageComponent } from './lesson-plan-page.component';
import { DashboardComponent } from '../../../components/modules/lesson-plan/dashboard/dashboard.component';
import { SettingsComponent } from '../../../components/modules/lesson-plan/settings/settings.component';
import { NewPlanComponent } from '../../../components/modules/lesson-plan/new-plan/new-plan.component';
import { ViewPlanComponent } from '../../../components/modules/lesson-plan/view-plan/view-plan.component';
import { AllPlansComponent } from '../../../components/modules/lesson-plan/all-plans/all-plans.component';

const routes: Routes = [
  {
    path: "",
    component: LessonPlanPageComponent,
    children: [
      { path: "", component: LessonPlanPageComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-plans", component: AllPlansComponent },
      { path: "new-plan", component: NewPlanComponent },
      { path: "view-plan", component: ViewPlanComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonPlanPageRoutingModule { }
