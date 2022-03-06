import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersPageComponent } from './customers-page.component';
import { DashboardComponent } from '../../../components/modules/customers/dashboard/dashboard.component';
import { AllCustomersComponent } from '../../../components/modules/customers/all-customers/all-customers.component';
import { NewCustomerComponent } from '../../../components/modules/customers/new-customer/new-customer.component';
import { ViewCustomerComponent } from '../../../components/modules/customers/view-customer/view-customer.component';

import { ViewCustomerGuard } from '../../../guards/modules/customers/view-customer.guard';


const routes: Routes = [
  {
    path: "",
    component: CustomersPageComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "all-customers", component: AllCustomersComponent },
      { path: "new-customer", component: NewCustomerComponent },
      { path: "view-customer", component: ViewCustomerComponent, canActivate: [ViewCustomerGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersPageRoutingModule { }
