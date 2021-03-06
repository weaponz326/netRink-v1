import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeesPageComponent } from './fees-page.component';
import { AllBillsComponent } from '../../../components/modules/fees/all-bills/all-bills.component';
import { StudentBillComponent } from '../../../components/modules/fees/student-bill/student-bill.component';
import { AllFeesComponent } from '../../../components/modules/fees/all-fees/all-fees.component';
import { ViewFeesComponent } from '../../../components/modules/fees/view-fees/view-fees.component';
import { DashboardComponent } from '../../../components/modules/fees/dashboard/dashboard.component';
import { SettingsComponent } from '../../../components/modules/fees/settings/settings.component';
import { FeesItemsComponent } from '../../../components/modules/fees/fees-items/fees-items.component';


const routes: Routes = [
  {
    path: "",
    component: FeesPageComponent,
    children: [
      { path: "", component: AllBillsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "student-bill", component: StudentBillComponent },
      { path: "all-fees", component: AllFeesComponent },
      { path: "view-fees",
        component: ViewFeesComponent ,
        children: [
          { path: "", component: FeesItemsComponent },
          { path: "fees-items", component: FeesItemsComponent },
          { path: "all-bills", component: AllBillsComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeesPageRoutingModule { }
