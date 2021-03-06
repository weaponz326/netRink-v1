import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { ModuleUtilitiesModule } from 'projects/personal/src/app/components/module-utilities/module-utilities.module';
import { CustomersWindowsModule } from '../../select-windows/customers-windows/customers-windows.module';
import { TablesWindowsModule } from '../../select-windows/tables-windows/tables-windows.module';
import { MenuWindowsModule } from '../../select-windows/menu-windows/menu-windows.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ItemFormComponent } from './item-form/item-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AllOrdersComponent,
    AddOrderComponent,
    ViewOrderComponent,
    OrderItemsComponent,
    AddItemComponent,
    EditItemComponent,
    ItemFormComponent,
  ],
  imports: [
    CommonModule,
    ChartsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ModuleUtilitiesModule,
    CustomersWindowsModule,
    TablesWindowsModule,
    MenuWindowsModule,
  ]
})
export class OrdersModule { }
