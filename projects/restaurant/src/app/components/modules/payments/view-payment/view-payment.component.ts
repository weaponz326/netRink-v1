import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PaymentFormComponent } from '../payment-form/payment-form.component';
import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { DeleteModalComponent } from 'projects/personal/src/app/components/module-utilities/delete-modal/delete-modal.component'

import { PaymentsApiService } from 'projects/restaurant/src/app/services/modules/payments-api/payments-api.service';
import { PaymentsPrintService } from 'projects/restaurant/src/app/services/printing/payments-print/payments-print.service';

import { Payment } from 'projects/restaurant/src/app/models/modules/payments/payments.model';


@Component({
  selector: 'app-view-payment',
  templateUrl: './view-payment.component.html',
  styleUrls: ['./view-payment.component.scss']
})
export class ViewPaymentComponent implements OnInit {

  constructor(
    private router: Router,
    private paymentsApi: PaymentsApiService,
    private paymentsPrint: PaymentsPrintService,
  ) { }

  @ViewChild('paymentFormComponentReference', { read: PaymentFormComponent, static: false }) paymentForm!: PaymentFormComponent;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('deleteModalComponentReference', { read: DeleteModalComponent, static: false }) deleteModal!: DeleteModalComponent;

  navHeading: any[] = [
    { text: "New Payment", url: "/home/payments/new-payment" },
  ];

  paymentData: any;

  isPaymentSaving = false;
  isPaymentDeleting = false;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getPayment();
  }

  getPayment(){
    this.paymentsApi.getPayment()
      .then(
        (res: any) => {
          console.log(res);
          this.paymentData = res;

          this.paymentForm.paymentForm.controls.paymentCode.setValue(res.data().payment_code);
          this.paymentForm.paymentForm.controls.paymentDate.setValue(res.data().payment_date);
          this.paymentForm.paymentForm.controls.amountPaid.setValue(res.data().amount_paid);

          this.paymentForm.paymentForm.controls.selectedOrderId = res.data().order.id;
          this.paymentForm.paymentForm.controls.orderCode.setValue(res.data().order.order_code);
          this.paymentForm.paymentForm.controls.customerName.setValue(res.data().order.customer_name);
          this.paymentForm.paymentForm.controls.totalAmount.setValue(res.data().order.total_amount);

          this.paymentForm.setBalance()
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  updatePayment(){
    console.log('u are saving a new payment');

    var data: Payment = {
      created_at: this.paymentData.data().created_at,
      account: localStorage.getItem('restaurant_id') as string,
      payment_code: this.paymentForm.paymentForm.controls.paymentCode.value,
      payment_date: this.paymentForm.paymentForm.controls.paymentDate.value,
      amount_paid: this.paymentForm.paymentForm.controls.amountPaid.value,
      order: {
        id: this.paymentForm.selectedOrderId,
        order_code: this.paymentForm.paymentForm.controls.orderCode.value,
        customer_name: this.paymentForm.paymentForm.controls.customerName.value,
        total_amount: this.paymentForm.paymentForm.controls.totalAmount.value,
      }
    }

    console.log(data);
    this.isPaymentSaving = false;

    this.paymentsApi.updatePayment(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isPaymentSaving = true;
        },
        (err: any) => {
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
      .then(
        (res: any) => {
          console.log(res);

          this.router.navigateByUrl('/home/payments/all-payments');
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  onPrint(){
    console.log("lets start printing...");
    this.paymentsPrint.printViewPayment();
  }

}
