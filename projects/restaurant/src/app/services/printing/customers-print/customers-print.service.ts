import { Injectable } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';
import { CustomersApiService } from 'projects/restaurant/src/app/services/modules/customers-api/customers-api.service';


@Injectable({
  providedIn: 'root'
})
export class CustomersPrintService {

  constructor(
    private pdfPrint: PdfPrintService,
    private customersApi: CustomersApiService
  ) { }

  // all customers

  async printAllCustomers(){
    const customersGridData = await this.customersApi.getAllAccountCustomer();

    var body = [['Customer ID', 'Customer Name', 'Phone No.']];

    for (let data of customersGridData.docs){
      var row = [];
      let rowData: any = data.data();
      row.push(rowData.customer_code);
      row.push(rowData.customer_name);
      row.push(rowData.phone);

      body.push(row);
    }

    let content = [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['25%', '50%', '25%'],
          body: body
        }
      }
    ]

    this.pdfPrint.openPdf(content);
  }

  // view customer

  async printViewCustomer(){
    const customerFormData = await this.customersApi.getCustomer();

    let formData: any = customerFormData.data();

    let content = [
      {
        columns: [
          [
            { text: 'Customer Code: ' + formData.customer_code },
            { text: 'Customer Name: ' + formData.customer_name },
            { text: 'Customer Type: ' + formData.customer_type },
            { text: 'Allergies: ' + formData.allergies },
            { text: 'Preferences: ' + formData.preferences },
            { text: 'Phone No.: ' + formData.phone },
            { text: 'Email: ' + formData.email },
            { text: 'Address: ' + formData.address },
            { text: 'state: ' + formData.state },
            { text: 'city: ' + formData.city },
          ],
        ]
      },
    ]

    this.pdfPrint.openPdf(content);
  }

}
