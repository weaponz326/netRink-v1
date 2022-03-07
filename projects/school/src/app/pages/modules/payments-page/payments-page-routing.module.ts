import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaymentsPageComponent } from './payments-page.component';
import { AllPaymentsComponent } from '../../../components/modules/payments/all-payments/all-payments.component';
import { ViewPaymentComponent } from '../../../components/modules/payments/view-payment/view-payment.component';
import { DashboardComponent } from '../../../components/modules/payments/dashboard/dashboard.component';
import { SettingsComponent } from '../../../components/modules/payments/settings/settings.component';

const routes: Routes = [
  {
    path: "",
    component: PaymentsPageComponent,
    children: [
      { path: "", component: AllPaymentsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-payments", component: AllPaymentsComponent },
      { path: "view-payment", component: ViewPaymentComponent  }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsPageRoutingModule { }
