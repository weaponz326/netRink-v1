import { Component, OnInit, ViewChild } from '@angular/core';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { DeliveriesApiService } from 'projects/restaurant/src/app/services/modules/deliveries-api/deliveries-api.service';


@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.component.html',
  styleUrls: ['./delivery-details.component.scss']
})
export class DeliveryDetailsComponent implements OnInit {

  constructor(private deliveriesApi: DeliveriesApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  deliveryData: any

  ngOnInit(): void {
    let sourceId = sessionStorage.getItem("restaurant_rink_source_id") as string;
    sessionStorage.setItem("restaurant_delivery_id", sourceId);

    this.getDelivery();
  }

  getDelivery(){
    this.deliveriesApi.getDelivery(sessionStorage.getItem("restaurant_delivery_id"))
      .then(
        (res: any) => {
          console.log(res);
          this.deliveryData = res;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}
