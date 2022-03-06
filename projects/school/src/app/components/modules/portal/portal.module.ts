import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { RinkDetailsModule } from './rink-details/rink-details.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { NewRinkComponent } from './new-rink/new-rink.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ViewRinkComponent } from './view-rink/view-rink.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    SearchViewComponent,
    SearchResultsComponent,
    SearchDetailComponent,
    NewRinkComponent,
    TimelineComponent,
    ViewRinkComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ChartsModule,
    ModuleUtilitiesModule,
    RinkDetailsModule,
  ]
})
export class PortalModule { }
