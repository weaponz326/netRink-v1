import { Component, OnInit, ViewChild } from '@angular/core';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { ReservationsApiService } from 'projects/restaurant/src/app/services/modules/reservations-api/reservations-api.service';


@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.scss']
})
export class ReservationDetailsComponent implements OnInit {

  constructor(private resrvationsApi: ReservationsApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  reservationData: any;

  ngOnInit(): void {
    let sourceId = sessionStorage.getItem("restaurant_rink_source_id") as string;
    sessionStorage.setItem("restaurant_reservation_id", sourceId);

    this.getReservation();
  }

  getReservation(){
    this.resrvationsApi.getReservation()
      .then(
        (res: any) => {
          console.log(res);
          this.reservationData = res;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}
