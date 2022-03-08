import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllPlansComponent } from './all-plans/all-plans.component';
import { NewPlanComponent } from './new-plan/new-plan.component';
import { ViewPlanComponent } from './view-plan/view-plan.component';
import { PlanFormComponent } from './plan-form/plan-form.component';
import { PlanSheetComponent } from './plan-sheet/plan-sheet.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllPlansComponent,
    NewPlanComponent,
    ViewPlanComponent,
    PlanFormComponent,
    PlanSheetComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    ModuleUtilitiesModule,
  ]
})
export class LessonPlanModule { }
