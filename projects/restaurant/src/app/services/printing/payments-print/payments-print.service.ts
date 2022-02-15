import { Injectable } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';
import { PaymentsApiService } from 'projects/restaurant/src/app/services/modules/payments-api/payments-api.service';


@Injectable({
  providedIn: 'root'
})
export class PaymentsPrintService {

  constructor(
    private pdfPrint: PdfPrintService,
    private paymentsApi: PaymentsApiService,
  ) { }

  // all payments

  async printAllPayments(){
    const paymentsGridData = await this.paymentsApi.getAllAccountPayment();

    var body = [['Order ID', 'Payment Date', 'Amount Paid', 'Order ID', 'Customer Name']];

    for (let data of paymentsGridData.docs){
      var row = [];
      let rowData: any = data.data();
      row.push(rowData.order_code);
      row.push(rowData.payment_date.asDate());
      row.push(rowData.amount_paid);
      row.push(rowData.order.order_code);
      row.push(rowData.order.customer_name);

      body.push(row);
    }

    let content = [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['15%', '20%', '20%', '15%', '30%'],
          body: body
        }
      }
    ]

    this.pdfPrint.openPdf(content);
  }

  // view payment

  async printViewPayment(){
    const paymentFormDate = await this.paymentsApi.getPayment();

    let formData: any = paymentFormDate.data();

    let content = [
      {
        columns: [
          [
            { text: 'Payment ID: ' + formData.payment_code },
            { text: 'Payment Date: ' + formData.payment_date },
            { text: 'Order ID: ' + formData.order.order_code },
            { text: 'Customer Name: ' + formData.order.customer_name },
            { text: 'Amount Due: ' + formData.order.amount_due },
            { text: 'Amount Paid: ' + formData.amount_due },
            { text: 'Balance: ' + (formData.order.amount_due - formData.amount_paid) },
          ],
          []
        ]
      },
    ]

    this.pdfPrint.openPdf(content);
  }

}
