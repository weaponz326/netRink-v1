import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import * as firebase from 'firebase/compat/app';

import { SelectMenuGroupComponent } from '../../../select-windows/menu-windows/select-menu-group/select-menu-group.component';
import { SelectMenuItemComponent } from '../../../select-windows/menu-windows/select-menu-item/select-menu-item.component';
import { SelectStaffComponent } from '../../../select-windows/staff-windows/select-staff/select-staff.component';
import { SelectOrderComponent } from '../../../select-windows/orders-windows/select-order/select-order.component';
import { SelectDeliveryComponent } from '../../../select-windows/deliveries-windows/select-delivery/select-delivery.component';
import { SelectCustomerComponent } from '../../../select-windows/customers-windows/select-customer/select-customer.component';
import { SelectReservationComponent } from '../../../select-windows/reservations-windows/select-reservation/select-reservation.component';
import { SelectStockItemComponent } from '../../../select-windows/kitchen-stock-windows/select-stock-item/select-stock-item.component';
import { SelectPaymentComponent } from '../../../select-windows/payments-windows/select-payment/select-payment.component';
import { SelectRosterComponent } from '../../../select-windows/roster-windows/select-roster/select-roster.component';
import { SelectTableComponent } from '../../../select-windows/tables-windows/select-table/select-table.component';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'

import { AccountApiService } from 'projects/restaurant/src/app/services/account-api/account-api.service';
import { PortalApiService } from 'projects/restaurant/src/app/services/modules/portal-api/portal-api.service';

import { Account } from 'projects/restaurant/src/app/models/account/account.model';
import { Rink } from 'projects/restaurant/src/app/models/modules/portal/portal.model';


@Component({
  selector: 'app-new-rink',
  templateUrl: './new-rink.component.html',
  styleUrls: ['./new-rink.component.scss']
})
export class NewRinkComponent implements OnInit {

  constructor(
    private router: Router,
    private accountApi: AccountApiService,
    private portalApi: PortalApiService,
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  @ViewChild('selectMenuGroupComponentReference', { read: SelectMenuGroupComponent, static: false }) selectMenuGroup!: SelectMenuGroupComponent;
  @ViewChild('selectMenuItemComponentReference', { read: SelectMenuItemComponent, static: false }) selectMenuItem!: SelectMenuItemComponent;
  @ViewChild('selectStaffComponentReference', { read: SelectStaffComponent, static: false }) selectStaff!: SelectStaffComponent;
  @ViewChild('selectOrderComponentReference', { read: SelectOrderComponent, static: false }) selectOrder!: SelectOrderComponent;
  @ViewChild('selectDeliveryComponentReference', { read: SelectDeliveryComponent, static: false }) selectDelivery!: SelectDeliveryComponent;
  @ViewChild('selectCustomerComponentReference', { read: SelectCustomerComponent, static: false }) selectCustomer!: SelectCustomerComponent;
  @ViewChild('selectReservationComponentReference', { read: SelectReservationComponent, static: false }) selectReservation!: SelectReservationComponent;
  @ViewChild('selectStockItemComponentReference', { read: SelectStockItemComponent, static: false }) selectStockItem!: SelectStockItemComponent;
  @ViewChild('selectPaymentComponentReference', { read: SelectPaymentComponent, static: false }) selectPayment!: SelectPaymentComponent;
  @ViewChild('selectRosterComponentReference', { read: SelectRosterComponent, static: false }) selectRoster!: SelectRosterComponent;
  @ViewChild('selectTableComponentReference', { read: SelectTableComponent, static: false }) selectTable!: SelectTableComponent;

  navHeading: any[] = [
    { text: "New Rink", url: "/home/portal/search" },
    { text: "Send Rink", url: "/home/portal/search/new-rink" },
  ];

  rinkForm: FormGroup = new FormGroup({});
  senderData: any;
  recipientData: any;

  selectedSourceId: any;
  typeSource: any[] = [
    'Customer',
    'Delivery',
    'Menu Item',
    'Menu Group',
    'Order',
    'Payment',
    'Reservation',
    'Roster',
    'Staff',
    'Stock Item',
    'Table',
  ];

  isRinkSending = false;

  ngOnInit(): void {
    this.initRinkForm();
  }

  ngAfterViewInit(): void {
    this.getSenderDetail()
    this.getRecipientDetail();
  }

  initRinkForm(){
    this.rinkForm = new FormGroup({
      recipientName: new FormControl(''),
      recipientLocation: new FormControl(''),
      rinkType: new FormControl('Customer'),
      rinkSource: new FormControl(''),
      comment: new FormControl('')
    })
  }

  getSenderDetail(){
    this.accountApi.getAccount()
      .then(
        (res: any) => {
          console.log(res);
          this.senderData = res.data();
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getRecipientDetail(){
    this.portalApi.getSearchDetail(String(sessionStorage.getItem('restaurantSearchAccount')))
      .then(
        (res: any) => {
          console.log(res);
          this.recipientData = res.data();

          this.rinkForm.controls.recipientName.setValue(this.recipientData.name);
          this.rinkForm.controls.recipientLocation.setValue(this.recipientData.location);
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  createRink(){
    let data: Rink = {
      created_at: firebase.default.firestore.FieldValue.serverTimestamp(),
      rink_type: this.rinkForm.controls.rinkType.value,
      rink_source: this.selectedSourceId,
      comment: this.rinkForm.controls.comment.value,
      sender: {
        id: localStorage.getItem('restaurant_id') as string,
        data: this.senderData,
      },
      recipient: {
        id: sessionStorage.getItem('restaurantSearchAccount') as string,
        data: this.recipientData
      }
    }

    console.log(data);
    this.isRinkSending = true;

    this.portalApi.createRink(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isRinkSending = false;

          sessionStorage.setItem('restaurant_rink_id', res.id);
          this.router.navigateByUrl('/home/portal/view-rink');
        },
        err => {
          console.log(err);
          this.isRinkSending = false;
          this.connectionToast.openToast();
        }
      )
  }

  onTypeSelected(){
    console.log("why did u change the type?");
    this.rinkForm.controls.rinkSource.setValue("");
  }

  openSourceWindow(){
    let type = this.rinkForm.controls.rinkType.value;
    console.log("You are opening a " + type + " rink type")

    if (type == "Menu Group") this.selectMenuGroup.openModal();
    else if (type == "Menu Item") this.selectMenuItem.openModal();
    else if (type == "Staff") this.selectStaff.openModal();
    else if (type == "Order") this.selectOrder.openModal();
    else if (type == "Delivery") this.selectDelivery.openModal();
    else if (type == "Customer") this.selectCustomer.openModal();
    else if (type == "Reservation") this.selectReservation.openModal();
    else if (type == "Stock Item") this.selectStockItem.openModal();
    else if (type == "Payment") this.selectPayment.openModal();
    // else if (type == "Roster") this.selectRoster.openModal();
    else if (type == "Table") this.selectTable.openModal();
  }

  onSourceSelected(sourceData: any){
    console.log(sourceData);
    let type = this.rinkForm.controls.rinkType.value;
    this.selectedSourceId = sourceData.id;

    if (type == "Menu Group") this.rinkForm.controls.rinkSource.setValue(sourceData.data().menu_group);
    else if (type == "Menu Item") this.rinkForm.controls.rinkSource.setValue(sourceData.data().item_name);
    else if (type == "Staff") this.rinkForm.controls.rinkSource.setValue(sourceData.data().staff_name);
    else if (type == "Order") this.rinkForm.controls.rinkSource.setValue(sourceData.data().order_code);
    else if (type == "Delivery") this.rinkForm.controls.rinkSource.setValue(sourceData.data().delivery_code);
    else if (type == "Customer") this.rinkForm.controls.rinkSource.setValue(sourceData.data().customer_name);
    else if (type == "Reservation") this.rinkForm.controls.rinkSource.setValue(sourceData.data().reservation_code);
    else if (type == "Stock Item") this.rinkForm.controls.rinkSource.setValue(sourceData.data().item_name);
    else if (type == "Payment") this.rinkForm.controls.rinkSource.setValue(sourceData.data().payment_code);
    // else if (type == "Roster") this.rinkForm.controls.rinkSource.setValue(sourceData.data().roster_name);
    else if (type == "Table") this.rinkForm.controls.rinkSource.setValue(sourceData.data().table_number);
  }

}
