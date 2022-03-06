import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  constructor() { }

  customerForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initCustomerForm();
  }

  initCustomerForm(){
    this.customerForm = new FormGroup({
      customerCode: new FormControl(''),
      customerName: new FormControl(''),
      customerType: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl(''),
      allergies: new FormControl(''),
      preferences: new FormControl(''),
    })
  }

}
