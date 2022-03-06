import { Injectable } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';
import { TablesApiService } from 'projects/restaurant/src/app/services/modules/tables-api/tables-api.service';


@Injectable({
  providedIn: 'root'
})
export class TablesPrintService {

  constructor(
    private pdfPrint: PdfPrintService,
    private tablesApi: TablesApiService
  ) { }

  // all tables

  async printAllTables(){
    const tablesGridData = await this.tablesApi.getAllAccountTable();

    var body = [['Table No.', 'Table Type', 'Table Status']];

    for (let data of tablesGridData.docs){
      var row = [];
      let rowData: any = data.data();
      row.push(rowData.table_number);
      row.push(rowData.table_type);
      row.push(rowData.table_status);

      body.push(row);
    }

    let content = [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['30%', '35%', '35%'],
          body: body
        }
      }
    ]

    this.pdfPrint.openPdf(content);
  }

  // // view table

  // async printViewTable(){
  //   const tableFormData = await this.tablesApi.getTable();

  //   let formData: any = tableFormData.data();

  //   let content = [
  //     {
  //       columns: [
  //         [
  //           { text: 'Table No.: ' + formData.table_number },
  //           { text: 'Table Type: ' + formData.table_type },
  //           { text: 'Capcity: ' + formData.capacity },
  //           { text: 'Location: ' + formData.location },
  //           { text: 'Table Status: ' + formData.table_status },
  //         ],
  //         []
  //       ]
  //     },
  //   ]

  //   this.pdfPrint.openPdf(content);
  // }

}
