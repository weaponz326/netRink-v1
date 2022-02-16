import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReservationsPageComponent } from './reservations-page.component';
import { DashboardComponent } from '../../../components/modules/reservations/dashboard/dashboard.component';
import { AllReservationsComponent } from '../../../components/modules/reservations/all-reservations/all-reservations.component';
import { ViewReservationComponent } from '../../../components/modules/reservations/view-reservation/view-reservation.component';


const routes: Routes = [
  {
    path: "",
    component: ReservationsPageComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "all-reservations", component: AllReservationsComponent },
      { path: "view-reservation", component: ViewReservationComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsPageRoutingModule { }
