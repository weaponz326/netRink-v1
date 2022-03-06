import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TablesPageComponent } from './tables-page.component';
import { DashboardComponent } from '../../../components/modules/tables/dashboard/dashboard.component';
import { AllTablesComponent } from '../../../components/modules/tables/all-tables/all-tables.component';


const routes: Routes = [
  {
    path: "",
    component: TablesPageComponent,
    children: [
      { path: "", component: AllTablesComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "all-tables", component: AllTablesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesPageRoutingModule { }
