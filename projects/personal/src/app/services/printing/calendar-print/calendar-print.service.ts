import { Injectable, ViewChild } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';
import { CalendarApiService } from 'projects/personal/src/app/services/modules/calendar-api/calendar-api.service';


@Injectable({
  providedIn: 'root'
})
export class CalendarPrintService {

  constructor(
    private pdfPrint: PdfPrintService,
    private calendarApi: CalendarApiService,
  ) { }

  // all calendars

  async printAllCalendars(){
    const calendarsGridData = await this.calendarApi.getAllUserCalendar();

    var body = [['Calendar Name', 'Created At']];

    for (let data of calendarsGridData.docs){
      var row = [];
      let rowData: any = data.data();
      row.push(rowData.calendar_name);
      row.push(rowData.created_at.toDate().toISOString().slice(0, 16));

      body.push(row);
    }

    let content = [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['65%', '35%'],
          body: body
        }
      }
    ]

    this.pdfPrint.openPdf(content);
  }

  // all schedules

  async printAllSchedules(){
    const schedulesGridData = await this.calendarApi.getAllUserSchedule();

    var body = [['Schedule Name', 'Start Date', 'End Date', 'Status']];

    for (let data of schedulesGridData.docs){
      var row = [];
      let rowData: any = data.data();
      row.push(rowData.schedule_name);
      row.push(rowData.start_date);
      row.push(rowData.end_date);
      row.push(rowData.status);

      body.push(row);
    }

    let content = [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['35%', '23%', '23%', '19%'],
          body: body
        }
      }
    ]

    this.pdfPrint.openPdf(content);
  }

}
