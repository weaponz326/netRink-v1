import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { SelectMenuGroupComponent } from '../../../select-windows/menu-windows/select-menu-group/select-menu-group.component';
import { SelectMenuItemComponent } from '../../../select-windows/menu-windows/select-menu-item/select-menu-item.component';
import { SelectStaffComponent } from '../../../select-windows/staff-windows/select-staff/select-staff.component';
import { SelectOrderComponent } from '../../../select-windows/orders-windows/select-order/select-order.component';
import { SelectDeliveryComponent } from '../../../select-windows/deliveries-windows/select-delivery/select-delivery.component';
import { SelectCustomerComponent } from '../../../select-windows/customers-windows/select-customer/select-customer.component';
import { SelectReservationComponent } from '../../../select-windows/reservations-windows/select-reservation/select-reservation.component';

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

  navHeading: any[] = [
    { text: "New Rink", url: "/home/portal/search" },
    { text: "Send Rink", url: "/home/portal/search/new-rink" },
  ];

  rinkForm: FormGroup = new FormGroup({});
  senderData: Account = {uid: "", name: "", location: "", about: ""};
  recipientData: Account = {uid: "", name: "", location: "", about: ""};
  rinkFormData: Rink = {uid: "", sender: this.senderData, recipient: this.recipientData, rink_date: new Date, rink_type: "", rink_source: "", comment: "" };

  selectedSourceId: any;
  typeSource: any[] = [
    'Customer',
    'Delivery',
    'Menu Item',
    'Menu Group',
    'Order',
    'Staff',
    'Reservation',
  ];

  isRinkSending = false;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getAccountDetail()
    this.getSearchDetail();
  }

  initRinkForm(){
    this.rinkForm = new FormGroup({
      recipientName: new FormControl(''),
      recipientLocation: new FormControl(''),
      rinkType: new FormControl('Calendar'),
      rinkSource: new FormControl(''),
      comment: new FormControl('')
    })
  }

  getAccountDetail(){
    this.accountApi.getAccount()
      .then(
        (res: any) => {
          console.log(res);
          this.senderData = res;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  getSearchDetail(){
    this.portalApi.getSearchDetail(String(sessionStorage.getItem('restaurantSearchUser')))
      .then(
        (res: any) => {
          console.log(res);

          this.recipientData = res;

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
    let data = {
      uid: "",
      sender: this.senderData,
      recipient: this.recipientData,
      rink_type: this.rinkForm.controls.rinkType.value,
      rink_source: this.rinkForm.controls.rinkSource.value,
      comment: this.rinkForm.controls.comment.value
    }

    console.log(data);
    this.isRinkSending = true;

    this.portalApi.createRink(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isRinkSending = false;

          sessionStorage.setItem('restaurant_rink_id', res.data.uid);
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
    // let type = this.typeDropDownList.value;

    // if (type == "Menu Group") this.selectMenuGroup.window.open();
    // else if (type == "Menu Item") this.selectMenuItem.window.open();
    // else if (type == "Staff") this.selectStaff.window.open();
    // else if (type == "Order") this.selectOrder.window.open();
    // else if (type == "Delivery") this.selectDelivery.window.open();
    // else if (type == "Customer") this.selectCustomer.window.open();
    // else if (type == "Reservation") this.selectReservation.window.open();
  }

  onSourceSelected(sourceData: any){
    console.log(sourceData);
    let type = this.rinkForm.controls.rinkType.value;
    this.selectedSourceId = sourceData.id;

    // if (type == "Menu Group") this.sourceInput.value = sourceData.menu_group;
    // else if (type == "Menu Item") this.sourceInput.value = sourceData.item_name;
    // else if (type == "Staff") this.sourceInput.value = sourceData.staff_name;
    // else if (type == "Order") this.sourceInput.value = sourceData.order_code;
    // else if (type == "Delivery") this.sourceInput.value = sourceData.delivery_code;
    // else if (type == "Customer") this.sourceInput.value = sourceData.customer_name;
    // else if (type == "Reservation") this.sourceInput.value = sourceData.reservation_code;
  }

}
