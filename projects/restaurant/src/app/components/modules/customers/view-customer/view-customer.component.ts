import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { CustomerFormComponent } from '../customer-form/customer-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'

import { CustomersApiService } from 'projects/restaurant/src/app/services/modules/customers-api/customers-api.service';
import { CustomersPrintService } from 'projects/restaurant/src/app/services/printing/customers-print/customers-print.service';

import { Customer } from 'projects/restaurant/src/app/models/modules/customers/customers.model';


@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent implements OnInit {

  constructor(
    private router: Router,
    private customersApi: CustomersApiService,
    private customersPrint: CustomersPrintService,
  ) { }

  @ViewChild('customerFormComponentReference', { read: CustomerFormComponent, static: false }) customerForm!: CustomerFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  navHeading: any[] = [
    { text: "All Customers", url: "/home/customers/all-customers" },
    { text: "View Customer", url: "/home/customers/view-customer" },
  ];

  customerData: any;

  isCustomerLoading = false;
  isCustomerSaving = false;
  isCustomerDeleting = false;

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer(){
    this.isCustomerLoading = true;

    this.customersApi.getCustomer()
      .then(
        (res: any) => {
          console.log(res);
          this.customerData = res;
          this.isCustomerLoading = false;

          this.customerForm.customerForm.controls.customerCode.setValue(this.customerData.data().customer_code);
          this.customerForm.customerForm.controls.customerName.setValue(this.customerData.data().customer_name);
          this.customerForm.customerForm.controls.customerType.setValue(this.customerData.data().customer_type);
          this.customerForm.customerForm.controls.phone.setValue(this.customerData.data().phone);
          this.customerForm.customerForm.controls.email.setValue(this.customerData.data().email);
          this.customerForm.customerForm.controls.address.setValue(this.customerData.data().address);
          this.customerForm.customerForm.controls.state.setValue(this.customerData.data().state);
          this.customerForm.customerForm.controls.city.setValue(this.customerData.data().city);
          this.customerForm.customerForm.controls.allergies.setValue(this.customerData.data().allergies);
          this.customerForm.customerForm.controls.preferences.setValue(this.customerData.data().preferences);
        },
        (err: any) => {
          console.log(err);
          this.isCustomerLoading = false;
          this.connectionToast.openToast();
        }
      )
  }

  updateCustomer(){
    console.log('u are saving a new customer');

    var data = {
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

    console.log(data);
    this.isCustomerSaving = true;

    this.customersApi.updateCustomer(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isCustomerSaving = false;
        },
        (err: any) => {
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
      .then(
        (res: any) => {
          console.log(res);
          this.router.navigateByUrl('/home/customers/all-customers');
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  onPrint(){
    console.log("lets start printing...");
    this.customersPrint.printViewCustomer();
  }

}
