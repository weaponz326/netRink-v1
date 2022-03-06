import { Component, OnInit, ViewChild } from '@angular/core';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { OrdersApiService } from 'projects/restaurant/src/app/services/modules/orders-api/orders-api.service';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private ordersApi: OrdersApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  orderData: any;
  orderItemsCount: any;

  ngOnInit(): void {
    let sourceId = sessionStorage.getItem("restaurant_rink_source_id") as string;
    sessionStorage.setItem("restaurant_order_id", sourceId);

    this.getOrder();
    this.getOrderItem();
  }

  getOrder(){
    this.ordersApi.getOrder()
      .then(
        (res: any) => {
          console.log(res);
          this.orderData = res;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getOrderItem(){
    this.ordersApi.getOrderOrderItem()
      .then(
        (res: any) => {
          console.log(res);
          this.orderItemsCount = res.docs.length;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

}
