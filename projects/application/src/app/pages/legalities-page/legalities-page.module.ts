import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainNavbarModule } from '../../components/main-navbar/main-navbar.module';

import { LegalitiesPageRoutingModule } from './legalities-page-routing.module';
import { LegalitiesPageComponent } from './legalities-page.component';


@NgModule({
  declarations: [
    LegalitiesPageComponent
  ],
  imports: [
    CommonModule,
    LegalitiesPageRoutingModule,
    MainNavbarModule
  ]
})
export class LegalitiesPageModule { }
