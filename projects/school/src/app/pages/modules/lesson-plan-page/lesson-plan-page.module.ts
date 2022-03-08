import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonPlanPageRoutingModule } from './lesson-plan-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';
import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { LessonPlanModule } from '../../../components/modules/lesson-plan/lesson-plan.module';

import { LessonPlanPageComponent } from './lesson-plan-page.component';


@NgModule({
  declarations: [
    LessonPlanPageComponent
  ],
  imports: [
    CommonModule,
    LessonPlanPageRoutingModule,
    MainNavbarModule,
    ModuleUtilitiesModule,
    LessonPlanModule
  ]
})
export class LessonPlanPageModule { }
