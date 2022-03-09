import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllClassesComponent } from './all-classes/all-classes.component';
import { NewClassComponent } from './new-class/new-class.component';
import { ViewClassComponent } from './view-class/view-class.component';
import { ClassFormComponent } from './class-form/class-form.component';
import { ClassStudentsComponent } from './class-students/class-students.component';
import { ClassSubjectsComponent } from './class-subjects/class-subjects.component';
import { AllDepartmentsComponent } from './all-departments/all-departments.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { DepartmentFormComponent } from './department-form/department-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllClassesComponent,
    NewClassComponent,
    ViewClassComponent,
    ClassFormComponent,
    ClassStudentsComponent,
    ClassSubjectsComponent,
    AllDepartmentsComponent,
    AddDepartmentComponent,
    EditDepartmentComponent,
    DepartmentFormComponent
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
export class ClassesModule { }
