import { Injectable } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';
import { DeliveriesApiService } from 'projects/restaurant/src/app/services/modules/deliveries-api/deliveries-api.service';


@Injectable({
  providedIn: 'root'
})
export class DeliveriesPrintService {

  constructor(
    private pdfPrint: PdfPrintService,
    private deliveriesApi: DeliveriesApiService
  ) { }

  // all deliveries

  async printAllDeliveries(){
    const deliveriesGridData = await this.deliveriesApi.getAllAccountDelivery();

    var body = [['Order ID', 'Customer Name', 'Delivery Location', 'Date Delivered', 'Delivery Status']];

    for (let data of deliveriesGridData.docs){
      var row = [];
      let rowData: any = data.data();
      row.push(rowData.order.order_code);
      row.push(rowData.order.customer.customer_name);
      row.push(rowData.delivery_location);
      row.push(rowData.date_delivered);
      row.push(rowData.delivery_status);

      body.push(row);
    }

    let content = [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['15%', '20%', '30%', '20%', '15%'],
          body: body
        }
      }
    ]

    this.pdfPrint.openPdf(content);
  }

  // view delivery

  async printViewDelivery(){
    const deliveryFormDate = await this.deliveriesApi.getDelivery();

    let formData: any = deliveryFormDate.data();

    let content = [
      {
        columns: [
          [
            { text: 'Order ID: ' + formData.order.order_code },
            { text: 'Order Date: ' + formData.order.order_date },
            { text: 'Customer Name: ' + formData.order.customer.customer_name },
            { text: 'Delivery Location: ' + formData.delivery_location },
            { text: 'Date Delivered: ' + formData.date_delivered },
            { text: 'Delivery Status: ' + formData.delivery_status },
          ],
          []
        ]
      },
    ]

    this.pdfPrint.openPdf(content);
  }

}
