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

    var body = [['Delivery Code', 'Delivery Date', 'Order ID', 'Customer Name', 'Delivery Location', 'Delivery Status']];

    for (let data of deliveriesGridData.docs){
      var row = [];
      let rowData: any = data.data();
      row.push(rowData.delivery_code);
      row.push(rowData.delivery_date);
      row.push(rowData.order.order_code);
      row.push(rowData.order.customer.customer_name);
      row.push(rowData.delivery_location);
      row.push(rowData.delivery_status);

      body.push(row);
    }

    let content = [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['10%', '15%', '10%', '25%', '25%', '15%'],
          body: body
        }
      }
    ]

    this.pdfPrint.openPdf(content);
  }

}
