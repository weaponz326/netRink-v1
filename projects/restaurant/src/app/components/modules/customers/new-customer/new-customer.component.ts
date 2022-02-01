import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { CustomersApiService } from 'projects/restaurant/src/app/services/modules/customers-api/customers-api.service';

import { CustomerFormComponent } from '../customer-form/customer-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'


@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {

  constructor(
    private router: Router,
    private customersApi: CustomersApiService
  ) { }

  @ViewChild('customerFormComponentReference', { read: CustomerFormComponent, static: false }) customerForm!: CustomerFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "New Customer", url: "/home/customers/new-customer" },
  ];

  isCustomerSaving = false;

  ngOnInit(): void {
  }

  saveCustomer(){
    console.log('u are saving a new customer');

    var customerData = {
      account: localStorage.getItem('restaurant_id'),
      customer_code: this.customerForm.customerForm.controls.customerCode.value,
      customer_name: this.customerForm.customerForm.controls.customerName.value,
      customer_type: this.customerForm.customerForm.controls.customerType.value,
      phone: this.customerForm.customerForm.controls.phone.value,
      email: this.customerForm.customerForm.controls.email.value,
      address: this.customerForm.customerForm.controls.address.value,
      state: this.customerForm.customerForm.controls.state.value,
      city: this.customerForm.customerForm.controls.city.value,
      allergies: this.customerForm.customerForm.controls.allergies.value,
      preferences: this.customerForm.customerForm.controls.preferences.value,
    }

    console.log(customerData);
    this.isCustomerSaving = true;

    this.customersApi.postCustomer(customerData)
      .subscribe(
        res => {
          console.log(res);
          this.isCustomerSaving = false;

          sessionStorage.setItem('restaurant_customer_id', res.id);
          this.router.navigateByUrl('/suite/customers/view-customer');
        },
        err => {
          console.log(err);
          this.isCustomerSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

}
