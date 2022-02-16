import { Injectable } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';
import { ReservationsApiService } from 'projects/restaurant/src/app/services/modules/reservations-api/reservations-api.service';


@Injectable({
  providedIn: 'root'
})
export class ReservationsPrintService {

  constructor(
    private pdfPrint: PdfPrintService,
    private reservationsApi: ReservationsApiService
  ) { }

  // all resrevations

  async printAllReservations(){
    const reservationsGridData = await this.reservationsApi.getAllAccountReservation();

    var body = [['Reservation ID', 'Reservation Date', 'Customer Name', 'Arrival Date', 'Status']];

    for (let data of reservationsGridData.docs){
      var row = [];
      let rowData: any = data.data();
      row.push(rowData.reservation_code);
      row.push(rowData.reservation_date);
      row.push(rowData.customer.customer_name);
      row.push(rowData.arrival_date);
      row.push(rowData.status);

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

  // view reservation

  async printViewReservation(){
    const reservationFormPromise = this.reservationsApi.getReservation();
    const reservationTablesGridPromise = this.reservationsApi.getReservationReservationTable();
    const [reservationFormData, reservationTablesGridData] = await Promise.all([reservationFormPromise, reservationTablesGridPromise]);

    let formData: any = reservationFormData.data();

    var body = [['Table No.', 'Capacity']];

    for (let data of reservationTablesGridData.docs){
      var row = [];
      let rowData: any = data.data();
      row.push(rowData.table.table_number);
      row.push(rowData.table.capacity);

      body.push(row);
    }

    let content = [
      {
        columns: [
          [
            { text: 'Reservation ID: ' + formData.reservation_code },
            { text: 'Reservation Date: ' + formData.reservation_date },
            { text: 'Customer Name: ' + formData.customer.customer_name },
            { text: 'Arrival Date: ' + formData.customer.arrival_date },
          ],
          [
            { text: 'No. of Guests: ' + formData.numberGuests },
            { text: 'No. of Tables: ' + formData.numberTables },
            { text: 'Reservation Status: ' + formData.reservation_tatus },
          ]
        ]
      },
      { text: 'Reserved Tables', bold: true, margin: [0, 20, 0, 10] },
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['30%', '30%'],
          body: body
        }
      }
    ]

    this.pdfPrint.openPdf(content);
  }

}
