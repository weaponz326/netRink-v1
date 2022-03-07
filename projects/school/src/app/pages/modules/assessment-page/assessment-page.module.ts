import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssessmentPageRoutingModule } from './assessment-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';
import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { AssessmentModule } from '../../../components/modules/assessment/assessment.module';

import { AssessmentPageComponent } from './assessment-page.component';


@NgModule({
  declarations: [
    AssessmentPageComponent
  ],
  imports: [
    CommonModule,
    AssessmentPageRoutingModule,
    MainNavbarModule,
    ModuleUtilitiesModule,
    AssessmentModule
  ]
})
export class AssessmentPageModule { }
