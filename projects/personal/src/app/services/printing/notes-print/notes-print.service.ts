import { Injectable, ViewChild } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';
import { NotesApiService } from 'projects/personal/src/app/services/modules/notes-api/notes-api.service';


@Injectable({
  providedIn: 'root'
})
export class NotesPrintService {

  constructor(
    private pdfPrint: PdfPrintService,
    private notesApi: NotesApiService,
  ) { }

  // all notes

  async printAllNotes(){
    const notesGridData = await this.notesApi.getAllUserNote();

    var body = [['Subject', 'Created At', 'Last Updated']];

    for (let data of notesGridData.docs){
      var row = [];
      let rowData: any = data.data();
      row.push(rowData.subject);
      row.push(rowData.created_at);
      row.push(rowData.updated_at);

      body.push(row);
    }

    let content = [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['50%', '25%', '25%'],
          body: body
        }
      }
    ]

    this.pdfPrint.openPdf(content);
  }

}
