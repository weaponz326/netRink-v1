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
import { AllParentsComponent } from './all-parents/all-parents.component';
import { NewParentComponent } from './new-parent/new-parent.component';
import { ViewParentComponent } from './view-parent/view-parent.component';
import { ParentFormComponent } from './parent-form/parent-form.component';
import { ParentWardsComponent } from './parent-wards/parent-wards.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllParentsComponent,
    NewParentComponent,
    ViewParentComponent,
    ParentFormComponent,
    ParentWardsComponent
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
export class ParentsModule { }
