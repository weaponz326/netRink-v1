import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

// import { SelectBillComponent } from '../../../select-windows/bills-windows/select-bill/select-bill.component';
// import { SelectTermComponent } from '../../../select-windows/terms-windows/select-term/select-term.component';


@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {

  constructor() { }

  // @ViewChild('selectBillComponentReference', { read: SelectBillComponent, static: false }) selectBill!: SelectBillComponent;
  // @ViewChild('selectTermComponentReference', { read: SelectTermComponent, static: false }) selectTerm!: SelectTermComponent;

  paymentForm: FormGroup = new FormGroup({});

  selectedBillId: any;
  selectedBillData: any;
  selectedTermId: any;
  selectedTermData: any;

  ngOnInit(): void {
    this.initPaymentForm();
  }

  initPaymentForm(){
    this.paymentForm = new FormGroup({
      paymentCode: new FormControl(''),
      paymentDate: new FormControl(''),
      term: new FormControl({value: '', disabled: true}),
      billCode: new FormControl({value: '', disabled: true}),
      studentCode: new FormControl({value: '', disabled: true}),
      studentName: new FormControl({value: '', disabled: true}),
      totalAmount: new FormControl({value: 0, disabled: true}),
      amountPaid: new FormControl(''),
      balance: new FormControl({value: '', disabled: true}),
    })
  }

  onBillSelected(billData: any){
    console.log(billData);

    this.selectedBillId = billData.id;
    this.selectedBillData = billData.data();

    this.paymentForm.controls.billCode.setValue(billData.data().bill_code);
    this.paymentForm.controls.studentCode.setValue(billData.data().student.student_code);
    this.paymentForm.controls.studentName.setValue(billData.data().student.student_name);
    this.paymentForm.controls.totalAmount.setValue(billData.data().total_amount);
  }

  openTermWindow(){
    console.log("You are opening select term window")
    // this.selectTerm.openModal();
  }

  onTermSelected(termData: any){
    console.log(termData);

    this.selectedTermId = termData.id;
    this.selectedTermData = termData.data();
    this.paymentForm.controls.termCode.setValue(termData.data().term_name);
  }

  openBillWindow(){
    console.log("You are opening select bill window")
    // this.selectBill.openModal();
  }

  setBalance(){
    this.paymentForm.controls.balance.setValue(
      this.paymentForm.controls.totalAmount.value - this.paymentForm.controls.amountPaid.value
    )
  }

}
