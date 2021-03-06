import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ConnectionToastComponent } from 'projects/personal/src/app/components/module-utilities/connection-toast/connection-toast.component'
import { SelectTermComponent } from '../../../select-windows/terms-windows/select-term/select-term.component';

import { ActiveTermService } from 'projects/school/src/app/services/active-term/active-term.service';
import { PaymentsApiService } from 'projects/school/src/app/services/modules/payments-api/payments-api.service';
// import { PaymentsPrintService } from 'projects/school/src/app/services/printing/payments-print/payments-print.service';


@Component({
  selector: 'app-all-payments',
  templateUrl: './all-payments.component.html',
  styleUrls: ['./all-payments.component.scss']
})
export class AllPaymentsComponent implements OnInit {

  constructor(
    private router: Router,
    private activeTerm: ActiveTermService,
    private paymentsApi: PaymentsApiService,
    // private paymentsPrint: PaymentsPrintService
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('selectTermComponentReference', { read: SelectTermComponent, static: false }) selectTerm!: SelectTermComponent;

  navHeading: any[] = [
    { text: "All Payments", url: "/home/payments/all-payments" },
  ];

  activeTermName: any;

  paymentsGridData: any[] = [];

  isFetchingGridData: boolean =  false;
  isDataAvailable: boolean =  true;

  firstInResponse: any = [];
  lastInResponse: any = [];
  nextStartAfter: any = [];
  prevStartAt: any = [];
  pageNumber = 0;
  disableNext: boolean = true;
  disablePrev: boolean = true;

  sortParams = {
    field: "created_at",
    direction: "desc"
  }

  ngOnInit(): void {
    this.getActiveTerm();
    this.getAccountPayment();
  }

  getActiveTerm(){
    this.activeTermName = this.activeTerm.getActiveTerm().data.term_name;
  }

  getAccountPayment(){
    this.isFetchingGridData = true;

    this.paymentsApi.getAccountPayment(this.sortParams, 20)
      .then(
        (res: any) => {
          console.log(res);
          this.paymentsGridData = res.docs;

          this.isFetchingGridData = false;
          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber = 1;

          if (!res.docs.length) this.isDataAvailable = false;
          else this.isDataAvailable = true;

          if (!res.docs.length || res.docs.length < 20){
            this.disableNext = true;
            this.disablePrev = true;
          }
          else{
            this.disableNext = false;
            this.disablePrev = true;
          }
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  nextPage(e: any){
    e.preventDefault();
    this.isFetchingGridData = true;

    this.paymentsApi.getAccountPaymentNext(this.sortParams, 20, this.nextStartAfter)
      .then(
        (res: any) => {
          console.log(res);
          this.paymentsGridData = res.docs;

          this.isFetchingGridData = false;
          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber++;

          if (res.docs.length < 20){
            this.disableNext = true;
            this.disablePrev = false;
          }
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  previousPage(e: any){
    e.preventDefault();
    this.isFetchingGridData = true;

    this.paymentsApi.getAccountPaymentPrev(this.sortParams, 20, this.prevStartAt)
      .then(
        (res: any) => {
          console.log(res);
          this.paymentsGridData = res.docs;

          this.isFetchingGridData = false;
          if (!res.docs.length) this.isDataAvailable = false;

          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber--;

          if (this.pageNumber == 1){
            this.disableNext = false;
            this.disablePrev = true;
          }
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  sortTable(field: any, direction: any){
    this.sortParams.field = field;
    this.sortParams.direction = direction;

    this.getAccountPayment();
  }

  viewPayment(paymentId: any){
    console.log(paymentId);

    sessionStorage.setItem("school_payment_id", paymentId);
    this.router.navigateByUrl("/home/payments/view-payment");
  }

  openTermWindow(){
    console.log("You are opening select term window")
    this.selectTerm.openModal();
  }

  onTermSelected(termData: any){
    console.log(termData);

    this.activeTerm.setActiveTerm(termData);
    this.getActiveTerm();
    this.getAccountPayment();
  }

  onPrint(){
    console.log("lets start printing...");
    // this.paymentsPrint.printAllPayments();
  }

}
