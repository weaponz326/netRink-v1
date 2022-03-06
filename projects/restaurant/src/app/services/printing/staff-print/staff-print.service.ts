import { Injectable } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';
import { StaffApiService } from 'projects/restaurant/src/app/services/modules/staff-api/staff-api.service';


@Injectable({
  providedIn: 'root'
})
export class StaffPrintService {

  constructor(
    private pdfPrint: PdfPrintService,
    private staffApi: StaffApiService
  ) { }

  async printAllStaff(){
    const menuGroupGridData = await this.staffApi.getAllAccountStaff();

    var body = [['Staff ID', 'Staff Name', 'Department', 'Job']];

    for (let data of menuGroupGridData.docs){
      var row = [];
      let rowData: any = data.data();
      row.push(rowData.staff_code);
      row.push(rowData.first_name + " " + rowData.last_name);
      row.push(rowData.department);
      row.push(rowData.job);

      body.push(row);
    }

    let content = [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['15%', '35%', '25%', '25%'],
          body: body
        }
      }
    ]

    this.pdfPrint.openPdf(content);
  }

  // view staff

  async printViewStaff(){
    const staffFormData = await this.staffApi.getStaff();

    let formData: any = staffFormData.data();

    let content = [
      { text: 'Personal Details', bold: true, margin: [0, 20, 0, 10] },
      {
        columns: [
          [
            { text: 'First Name: ' + formData.first_name },
            { text: 'Last Name: ' + formData.last_name },
            { text: 'Sex: ' + formData.sex },
            { text: 'Date of Birth: ' + formData.date_of_birth },
          ],
          [
            { text: 'Nationality: ' + formData.nationality },
            { text: 'Religion: ' + formData.religion },
          ]
        ]
      },
      { text: 'Contact Details', bold: true, margin: [0, 20, 0, 10] },
      {
        columns: [
          [
            { text: 'Phone No.: ' + formData.phone },
            { text: 'Email: ' + formData.email },
            { text: 'Address: ' + formData.address },
          ],
          [
            { text: 'State/Region: ' + formData.state },
            { text: 'city/Town: ' + formData.city },
            { text: 'Post Code: ' + formData.post_code },
          ]
        ]
      },
      { text: 'Staff Details', bold: true, margin: [0, 20, 0, 10] },
      {
        columns: [
          [
            { text: 'Staff ID: ' + formData.staff_code },
          ],
          [
            { text: 'Department: ' + formData.department },
            { text: 'Job: ' + formData.job },
          ]
        ]
      },
    ]

    this.pdfPrint.openPdf(content);
  }

}
