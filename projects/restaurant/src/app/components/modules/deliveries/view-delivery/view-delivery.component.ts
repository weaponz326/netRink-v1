import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { DeliveryFormComponent } from '../delivery-form/delivery-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'

import { DeliveriesApiService } from 'projects/restaurant/src/app/services/modules/deliveries-api/deliveries-api.service';
import { DeliveriesPrintService } from 'projects/restaurant/src/app/services/printing/deliveries-print/deliveries-print.service';

import { Delivery } from 'projects/restaurant/src/app/models/modules/deliveries/deliveries.model';


@Component({
  selector: 'app-view-delivery',
  templateUrl: './view-delivery.component.html',
  styleUrls: ['./view-delivery.component.scss']
})
export class ViewDeliveryComponent implements OnInit {

  constructor(
    private router: Router,
    private deliveriesApi: DeliveriesApiService,
    private deliveriesPrint: DeliveriesPrintService,
  ) { }

  @ViewChild('deliveryFormComponentReference', { read: DeliveryFormComponent, static: false }) deliveryForm!: DeliveryFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  navHeading: any[] = [
    { text: "View Delivery", url: "/home/deliveries/view-delivery" },
  ];

  deliveryData: any;

  isDeliveryLoading = false;
  isDeliverySaving = false;
  isDeliveryDeleting = false;

  ngOnInit(): void {
    this.getDelivery();
  }

  getDelivery(){
    this.isDeliveryLoading = true;

    this.deliveriesApi.getDelivery()
      .then(
        (res: any) => {
          console.log(res);

          this.deliveryData = res;
          this.isDeliveryLoading = false;

          this.deliveryForm.deliveryForm.controls.orderCode.setValue(this.deliveryData.data().order.order_code);
          this.deliveryForm.deliveryForm.controls.orderDate.setValue(this.deliveryData.data().order.order_date);
          this.deliveryForm.deliveryForm.controls.customerName.setValue(this.deliveryData.data().order.customer.customer_name);
          this.deliveryForm.deliveryForm.controls.dateDelivered.setValue(this.deliveryData.data().date_delivered);
          this.deliveryForm.deliveryForm.controls.deliveryLocation.setValue(this.deliveryData.data().delivery_location);
          this.deliveryForm.deliveryForm.controls.deliveryStatus.setValue(this.deliveryData.data().delivery_status);

          this.deliveryForm.orderId = this.deliveryData.id;
        },
        (err: any) => {
          console.log(err);
          this.isDeliveryLoading = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateDelivery(){
    console.log('u are saving a new delivery');

    let data = {
      delivery_code: this.deliveryForm.deliveryForm.controls.deliveryCode.value,
      date_delivered: this.deliveryForm.deliveryForm.controls.dateDelivered.value,
      delivery_location: this.deliveryForm.deliveryForm.controls.deliveryLocation.value,
      delivery_status: this.deliveryForm.deliveryForm.controls.deliveryStatus.value,
      order: {
        id: this.deliveryData.data().order.id,
        order_code: this.deliveryData.data().order.order_code,
        order_date: this.deliveryData.data().order.order_date,
        customer: {
          id: this.deliveryData.data().order.customer.id,
          customer_name: this.deliveryForm.deliveryForm.controls.customerName.value,
        }
      }
    }

    console.log(data);
    this.isDeliverySaving = true;

    this.deliveriesApi.updateDelivery(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isDeliverySaving = false;
        },
        (err: any) => {
          console.log(err);
          this.isDeliverySaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  confirmDelete(){
    this.deleteModal.openModal();
  }

  deleteDelivery(){
    this.isDeliveryDeleting = true;

    this.deliveriesApi.deleteDelivery()
      .then(
        (res: any) => {
          console.log(res);
          this.router.navigateByUrl('/home/deliveries/all-deliveries');
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  onPrint(){
    console.log("lets start printing...");
    this.deliveriesPrint.printViewDelivery();
  }

}
