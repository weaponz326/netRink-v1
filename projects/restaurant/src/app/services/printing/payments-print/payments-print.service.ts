import { Injectable } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';
import { PaymentsApiService } from 'projects/restaurant/src/app/services/modules/payments-api/payments-api.service';
import { OrdersApiService } from 'projects/restaurant/src/app/services/modules/orders-api/orders-api.service';


@Injectable({
  providedIn: 'root'
})
export class PaymentsPrintService {

  constructor(
    private pdfPrint: PdfPrintService,
    private paymentsApi: PaymentsApiService,
    private ordersApi: OrdersApiService
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
            { text: 'Customer Name: ' + formData.order.customer.customer_name },
            { text: 'Amount Due: ' + formData.order.total_amount },
            { text: 'Amount Paid: ' + formData.amount_paid },
            { text: 'Balance: ' + (formData.order.total_amount - formData.amount_paid) },
          ],
          []
        ]
      },
    ]

    this.pdfPrint.openPdf(content);
  }

  async printPaymentReceipt(){
    const orderFormPromise = this.ordersApi.getOrder();
    const orderItemsGridPromise = this.ordersApi.getOrderOrderItem();
    const paymentFormPromise = await this.paymentsApi.getPayment();
    const [orderFormData, orderItemsGridData, paymentFormData] = await Promise.all([orderFormPromise, orderItemsGridPromise, paymentFormPromise]);

    let orderData: any = orderFormData.data();
    let paymentData: any = paymentFormData.data();

    console.log(orderItemsGridData.docs);

    var body = [['Menu Item', 'Item Price', 'Quantity', 'Total Price']];

    for (let data of orderItemsGridData.docs){
      var row = [];
      let rowData: any = data.data();
      row.push(rowData.menu_item.data.item_name);
      row.push(rowData.menu_item.data.price);
      row.push(rowData.quantity);
      row.push(rowData.menu_item.data.price * rowData.quantity);

      body.push(row);
    }

    var totalAmount = 0;
    for (let data of orderItemsGridData.docs){
      let rowData: any = data.data();
      totalAmount += rowData.menu_item.data.price * rowData.quantity;
    }

    body.push(['', '', '', totalAmount.toString()])

    let content = [
      { text: 'Order Details', bold: true, margin: [0, 20, 0, 10] },
      {
        columns: [
          [
            { text: 'Order ID: ' + orderData.order_code },
            { text: 'Order Date: ' + orderData.order_date },
            { text: 'Customer Name: ' + orderData.customer.customer_name },
          ],
          [
            { text: 'Order Type: ' + orderData.order_type },
            { text: 'Order Status: ' + orderData.order_tatus },
          ]
        ]
      },
      { text: 'Order Items', bold: true, margin: [0, 20, 0, 10] },
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['35%', '20%', '15%', '20%'],
          body: body
        }
      },
      { text: 'Payment Details', bold: true, margin: [0, 20, 0, 10] },
      {
        columns: [
          [
            { text: 'Payment ID: ' + paymentData.payment_code },
            { text: 'Payment Date: ' + paymentData.payment_date },
            { text: 'Order ID: ' + paymentData.order.order_code },
            { text: 'Customer Name: ' + paymentData.order.customer.customer_name },
            { text: 'Amount Due: ' + paymentData.order.total_amount },
            { text: 'Amount Paid: ' + paymentData.amount_paid },
            { text: 'Balance: ' + (paymentData.order.total_amount - paymentData.amount_paid) },
          ],
        ]
      },
    ]

    this.pdfPrint.printRoll(content);
  }

}
