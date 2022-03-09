import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsPageRoutingModule } from './terms-page-routing.module';
import { MainNavbarModule } from 'projects/application/src/app/components/main-navbar/main-navbar.module';
import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { TermsModule } from '../../../components/modules/terms/terms.module';

import { TermsPageComponent } from './terms-page.component';


@NgModule({
  declarations: [
    TermsPageComponent
  ],
  imports: [
    CommonModule,
    TermsPageRoutingModule,
    MainNavbarModule,
    ModuleUtilitiesModule,
    TermsModule
  ]
})
export class TermsPageModule { }
