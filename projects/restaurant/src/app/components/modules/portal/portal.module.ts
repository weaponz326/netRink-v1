import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { RinkDetailsModule } from './rink-details/rink-details.module';
import { MenuWindowsModule } from '../../select-windows/menu-windows/menu-windows.module';
import { StaffWindowsModule } from '../../select-windows/staff-windows/staff-windows.module';
import { OrdersWindowsModule } from '../../select-windows/orders-windows/orders-windows.module';
import { DeliveriesWindowsModule } from '../../select-windows/deliveries-windows/deliveries-windows.module';
import { CustomersWindowsModule } from '../../select-windows/customers-windows/customers-windows.module';
import { ReservationsWindowsModule } from '../../select-windows/reservations-windows/reservations-windows.module';
import { KitchenStockWindowsModule } from '../../select-windows/kitchen-stock-windows/kitchen-stock-windows.module';
import { PaymentsWindowsModule } from '../../select-windows/payments-windows/payments-windows.module';
import { RosterWindowsModule } from '../../select-windows/roster-windows/roster-windows.module';
import { TablesWindowsModule } from '../../select-windows/tables-windows/tables-windows.module';

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
    MenuWindowsModule,
    StaffWindowsModule,
    OrdersWindowsModule,
    DeliveriesWindowsModule,
    CustomersWindowsModule,
    ReservationsWindowsModule,
    KitchenStockWindowsModule,
    PaymentsWindowsModule,
    RosterWindowsModule,
    TablesWindowsModule,
  ]
})
export class PortalModule { }
