import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { ModuleHomeComponent } from './module-home/module-home.component';



@NgModule({
  declarations: [
    ModuleHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ModuleUtilitiesModule
  ],
  exports: [
    ModuleHomeComponent,
  ]
})
export class ModuleHomeModule { }
