import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { TermsWindowsModule } from '../../select-windows/terms-windows/terms-windows.module';
import { StudentsWindowsModule } from '../../select-windows/students-windows/students-windows.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllSectionsComponent } from './all-sections/all-sections.component';
import { NewSectionComponent } from './new-section/new-section.component';
import { ViewSectionComponent } from './view-section/view-section.component';
import { SectionStudentsComponent } from './section-students/section-students.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllSectionsComponent,
    NewSectionComponent,
    ViewSectionComponent,
    SectionStudentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    ModuleUtilitiesModule,
    TermsWindowsModule,
    StudentsWindowsModule
  ]
})
export class SectionsModule { }
