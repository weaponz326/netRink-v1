import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PaymentsApiService } from 'projects/restaurant/src/app/services/modules/payments-api/payments-api.service';

import { PaymentFormComponent } from '../payment-form/payment-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'


@Component({
  selector: 'app-view-payment',
  templateUrl: './view-payment.component.html',
  styleUrls: ['./view-payment.component.scss']
})
export class ViewPaymentComponent implements OnInit {

  constructor(
    private router: Router,
    private paymentsApi: PaymentsApiService
  ) { }

  @ViewChild('paymentFormComponentReference', { read: PaymentFormComponent, static: false }) paymentForm!: PaymentFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  navHeading: any[] = [
    { text: "New Payment", url: "/home/payments/new-payment" },
  ];

  isPaymentSaving = false;
  isPaymentDeleting = false;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getPayment();
  }

  getPayment(){
    this.paymentsApi.getSinglePayment()
      .subscribe(
        res => {
          console.log(res);

          this.paymentForm.paymentForm.controls.paymentCode.setValue(res.payment_code);
          this.paymentForm.paymentForm.controls.paymentDate.setValue(res.payment_date);
          this.paymentForm.paymentForm.controls.amountPaid.setValue(res.amount_paid);

          this.paymentForm.paymentForm.controls.selectedOrderId = res.order.id;
          this.paymentForm.paymentForm.controls.paymentCode.setValue(res.order.order_code);
          this.paymentForm.paymentForm.controls.totalAmount.setValue(res.order.total_amount);
        },
        err => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  savePayment(){
    console.log('u are saving a new payment');

    var paymentData = {
      account: localStorage.getItem('restaurant_id'),
      payment_code: this.paymentForm.paymentForm.controls.paymentCode.value,
      payment_date: this.paymentForm.paymentForm.controls.paymentDate.value,
      order: this.paymentForm.paymentForm.controls.selectedOrderId,
      amount_paid: this.paymentForm.paymentForm.controls.amountPaid.value,
    }

    console.log(paymentData);
    this.isPaymentSaving = false;

    this.paymentsApi.putPayment(paymentData)
      .subscribe(
        res => {
          console.log(res);
          this.isPaymentSaving = true;
        },
        err => {
          console.log(err);
          this.isPaymentSaving = true;
          this.connectionToast.openToast();
        }
      )
  }

  confirmDelete(){
    this.deleteModal.openModal();
  }

  deleteMenuGroup(){
    this.isPaymentDeleting = true;

    this.paymentsApi.deletePayment()
      .subscribe(
        res => {
          console.log(res);

          this.router.navigateByUrl('/home/payments/all-payments');
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
