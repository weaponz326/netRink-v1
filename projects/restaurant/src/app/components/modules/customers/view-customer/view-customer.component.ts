import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { CustomersApiService } from 'projects/restaurant/src/app/services/modules/customers-api/customers-api.service';

import { CustomerFormComponent } from '../customer-form/customer-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'


@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent implements OnInit {

  constructor(
    private router: Router,
    private customersApi: CustomersApiService
  ) { }

  @ViewChild('customerFormComponentReference', { read: CustomerFormComponent, static: false }) customerForm!: CustomerFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  navHeading: any[] = [
    { text: "All Customers", url: "/home/customers/all-customers" },
    { text: "View Customer", url: "/home/customers/view-customer" },
  ];

  isCustomerSaving = false;
  isCustomerDeleting = false;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getCustomer();
  }

  getCustomer(){
    this.customersApi.getSingleCustomer()
      .subscribe(
        res => {
          console.log(res);

          this.customerForm.customerForm.controls.customerCodeInput.setValue(res.customer_code);
          this.customerForm.customerForm.controls.customerNameInput.setValue(res.customer_name);
          this.customerForm.customerForm.controls.customerTypeInput.setValue(res.customer_type);
          this.customerForm.customerForm.controls.phoneInput.setValue(res.phone);
          this.customerForm.customerForm.controls.emailInput.setValue(res.email);
          this.customerForm.customerForm.controls.addressTextBox.setValue(res.address);
          this.customerForm.customerForm.controls.stateInput.setValue(res.state);
          this.customerForm.customerForm.controls.cityInput.setValue(res.city);
          this.customerForm.customerForm.controls.allergiesTextBox.setValue(res.allergies);
          this.customerForm.customerForm.controls.preferencesTextBox.setValue(res.preferences);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
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
        },
        err => {
          console.log(err);
          this.isCustomerSaving = false;
          this.connectionToast.openToast();
        }
      )
  }

  confirmDelete(){
    this.deleteModal.openModal();
  }

  deleteCustomer(){
    this.isCustomerDeleting = true;

    this.customersApi.deleteCustomer()
      .subscribe(
        res => {
          console.log(res);

          this.router.navigateByUrl('/home/customers/all-customers');
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  onPrint(){
    console.log("lets start printing...");
  }

}
