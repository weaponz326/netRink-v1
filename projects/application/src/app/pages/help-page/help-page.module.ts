import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainNavbarModule } from '../../components/main-navbar/main-navbar.module';
import { HelpModule } from '../../components/help/help.module';

import { HelpPageRoutingModule } from './help-page-routing.module';
import { HelpPageComponent } from './help-page.component';


@NgModule({
  declarations: [
    HelpPageComponent
  ],
  imports: [
    CommonModule,
    HelpPageRoutingModule,
    MainNavbarModule,
    HelpModule,
  ]
})
export class HelpPageModule { }
