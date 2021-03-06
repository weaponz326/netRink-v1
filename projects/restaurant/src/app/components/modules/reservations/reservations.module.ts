import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { CustomersWindowsModule } from '../../select-windows/customers-windows/customers-windows.module';
import { TablesWindowsModule } from '../../select-windows/tables-windows/tables-windows.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllReservationsComponent } from './all-reservations/all-reservations.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { ReservationTablesComponent } from './reservation-tables/reservation-tables.component';
import { ViewReservationComponent } from './view-reservation/view-reservation.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllReservationsComponent,
    NewReservationComponent,
    ReservationTablesComponent,
    ViewReservationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    ModuleUtilitiesModule,
    CustomersWindowsModule,
    TablesWindowsModule
  ]
})
export class ReservationsModule { }
