import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalitiesPageRoutingModule } from './legalities-page-routing.module';
import { LegalitiesPageComponent } from './legalities-page.component';


@NgModule({
  declarations: [
    LegalitiesPageComponent
  ],
  imports: [
    CommonModule,
    LegalitiesPageRoutingModule
  ]
})
export class LegalitiesPageModule { }
