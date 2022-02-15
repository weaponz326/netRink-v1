import { Injectable } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';
import { KitchenStockApiService } from 'projects/restaurant/src/app/services/modules/kitchen-stock-api/kitchen-stock-api.service';


@Injectable({
  providedIn: 'root'
})
export class KitchenStockPrintService {

  constructor(
    private pdfPrint: PdfPrintService,
    private kitchenStockApi: KitchenStockApiService
  ) { }

  // all stock item

  async printAllStockItems(){
    const stockItemsGridData = await this.kitchenStockApi.getAllAccountStockItem();

    var body = [['Stock Item ID', 'Stock Item Name', 'Quantity', 'Category', 'Item Type', 'Refill Ordered']];

    for (let data of stockItemsGridData.docs){
      var row = [];
      let rowData: any = data.data();
      row.push(rowData.item_code);
      row.push(rowData.item_name);
      row.push(rowData.quantity);
      row.push(rowData.category);
      row.push(rowData.item_type);
      row.push(rowData.refill_ordered);

      body.push(row);
    }

    let content = [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['15%', '25%', '10%', '18%', '18%', '14%'],
          body: body
        }
      }
    ]

    this.pdfPrint.openPdf(content);
  }

}
