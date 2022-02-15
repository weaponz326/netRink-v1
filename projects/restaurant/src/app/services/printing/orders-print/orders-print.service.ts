import { Injectable } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';
import { OrdersApiService } from 'projects/restaurant/src/app/services/modules/orders-api/orders-api.service';


@Injectable({
  providedIn: 'root'
})
export class OrdersPrintService {

  constructor(
    private pdfPrint: PdfPrintService,
    private ordersApi: OrdersApiService
  ) { }

  // all orders

  async printAllOrders(){
    const ordersGridData = await this.ordersApi.getAllAccountOrder();

    var body = [['Order ID', 'Order Date', 'Customer Name', 'Total Amount']];

    for (let data of ordersGridData.docs){
      var row = [];
      let rowData: any = data.data();
      row.push(rowData.order_code);
      row.push(rowData.order_date);
      row.push(rowData.customer.customer_name);
      row.push(rowData.total_amount);

      body.push(row);
    }

    let content = [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['20%', '25%', '35%' , '20%'],
          body: body
        }
      }
    ]

    this.pdfPrint.openPdf(content);
  }

  // view order

  async printViewOrder(){
    const orderFormPromise = this.ordersApi.getOrder();
    const orderItemsGridPromise = this.ordersApi.getOrderOrderItem();
    const [orderFormData, orderItemsGridData] = await Promise.all([orderFormPromise, orderItemsGridPromise]);

    let formData: any = orderFormData.data();

    var body = [['Menu Item', 'Item Price', 'Quantity', 'Total Price']];

    for (let data of orderItemsGridData.docs){
      var row = [];
      let rowData: any = data.data();
      row.push(rowData.item_code);
      row.push(rowData.item_name);
      row.push(rowData.price);

      body.push(row);
    }

    var totalAmount = 0;
    for (let data of orderItemsGridData.docs){
      let rowData: any = data.data();
      totalAmount += rowData.menu_item.price * rowData.quantity;
    }

    body.push(['', '', totalAmount.toString()])

    let content = [
      {
        columns: [
          [
            { text: 'Order ID: ' + formData.order_code },
            { text: 'Order Date: ' + formData.order_date },
            { text: 'Customer Name: ' + formData.customer.customer_name },
          ],
          [
            { text: 'Order Type: ' + formData.order_type },
            { text: 'Order Status: ' + formData.order_tatus },
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
      }
    ]

    this.pdfPrint.openPdf(content);
  }

}
