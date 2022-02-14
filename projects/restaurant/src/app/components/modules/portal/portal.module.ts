import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
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

import { StaffDetailsComponent } from './rink-details/staff-details/staff-details.component';
import { CustomerDetailsComponent } from './rink-details/customer-details/customer-details.component';
import { ReservationDetailsComponent } from './rink-details/reservation-details/reservation-details.component';
import { OrderDetailsComponent } from './rink-details/order-details/order-details.component';
import { MenuGroupDetailsComponent } from './rink-details/menu-group-details/menu-group-details.component';
import { MenuItemDetailsComponent } from './rink-details/menu-item-details/menu-item-details.component';
import { PaymentDetailsComponent } from './rink-details/payment-details/payment-details.component';
import { StockItemDetailsComponent } from './rink-details/stock-item-details/stock-item-details.component';
import { DeliveryDetailsComponent } from './rink-details/delivery-details/delivery-details.component';
import { TableDetailsComponent } from './rink-details/table-details/table-details.component';
import { RosterDetailsComponent } from './rink-details/roster-details/roster-details.component';


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
    StaffDetailsComponent,
    CustomerDetailsComponent,
    ReservationDetailsComponent,
    OrderDetailsComponent,
    MenuGroupDetailsComponent,
    MenuItemDetailsComponent,
    PaymentDetailsComponent,
    StockItemDetailsComponent,
    DeliveryDetailsComponent,
    TableDetailsComponent,
    RosterDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ChartsModule,
    ModuleUtilitiesModule,
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
