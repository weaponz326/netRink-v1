import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { SelectClassComponent } from './select-class/select-class.component';
import { SelectDepartmentComponent } from './select-department/select-department.component';



@NgModule({
  declarations: [
    SelectClassComponent,
    SelectDepartmentComponent
  ],
  imports: [
    CommonModule,
    ModuleUtilitiesModule,
  ],
  exports: [
    SelectClassComponent,
    SelectDepartmentComponent
  ]
})
export class ClassesWindowsModule { }
