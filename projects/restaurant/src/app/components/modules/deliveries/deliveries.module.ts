import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllDeliveriesComponent } from './all-deliveries/all-deliveries.component';
import { DeliveryFormComponent } from './delivery-form/delivery-form.component';
import { ViewDeliveryComponent } from './view-delivery/view-delivery.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllDeliveriesComponent,
    DeliveryFormComponent,
    ViewDeliveryComponent
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
export class DeliveriesModule { }
