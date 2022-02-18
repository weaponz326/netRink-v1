import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';

import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { MenuGroupDetailsComponent } from './menu-group-details/menu-group-details.component';
import { MenuItemDetailsComponent } from './menu-item-details/menu-item-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { StockItemDetailsComponent } from './stock-item-details/stock-item-details.component';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';
import { TableDetailsComponent } from './table-details/table-details.component';
import { RosterDetailsComponent } from './roster-details/roster-details.component';

@NgModule({
  declarations: [
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
    ModuleUtilitiesModule,
  ],
  exports: [
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
  ]
})
export class RinkDetailsModule { }
