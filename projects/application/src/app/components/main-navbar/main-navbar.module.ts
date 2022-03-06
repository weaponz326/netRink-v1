import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { MainFooterComponent } from './main-footer/main-footer.component';



@NgModule({
  declarations: [
    MainNavbarComponent,
    MainFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ModuleUtilitiesModule
  ],
  exports: [
    MainNavbarComponent,
    MainFooterComponent
  ]
})
export class MainNavbarModule { }
