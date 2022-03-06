import { Injectable, ViewChild } from '@angular/core';

import { PdfPrintService } from 'projects/personal/src/app/services/pdf-print/pdf-print.service';
import { TasksApiService } from 'projects/personal/src/app/services/modules/tasks-api/tasks-api.service';


@Injectable({
  providedIn: 'root'
})
export class TasksPrintService {

  constructor(
    private pdfPrint: PdfPrintService,
    private tasksApi: TasksApiService,
  ) { }

  // all task groups

  async printAllTaskGroups(){
    const taskGroupsGridData = await this.tasksApi.getAllUserTaskGroup();

    var body = [['Task Group', 'Created At']];

    for (let data of taskGroupsGridData.docs){
      var row = [];
      let rowData: any = data.data();
      row.push(rowData.task_group);
      row.push(rowData.created_at);

      body.push(row);
    }

    let content = [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['65%', '35%',],
          body: body
        }
      }
    ]

    this.pdfPrint.openPdf(content);
  }

  // all task items

  async printAllTaskItems(){
    const taskItemsGridData = await this.tasksApi.getAllUserTaskItem();

    var body = [['Task Item', 'Priority', 'Start Date', 'End Date', 'Status']];

    for (let data of taskItemsGridData.docs){
      var row = [];
      let rowData: any = data.data();
      row.push(rowData.task_item);
      row.push(rowData.priority);
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
          widths: ['36%', '14%', '18%', '18%', '14%'],
          body: body
        }
      }
    ]

    this.pdfPrint.openPdf(content);
  }

}
