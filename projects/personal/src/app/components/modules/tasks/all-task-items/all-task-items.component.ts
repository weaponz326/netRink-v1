import { Component, OnInit, ViewChild } from '@angular/core';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'

import { TasksApiService } from 'projects/personal/src/app/services/modules/tasks-api/tasks-api.service';
import { TasksPrintService } from 'projects/personal/src/app/services/printing/tasks-print/tasks-print.service';

import { TaskItem } from 'projects/personal/src/app/models/modules/tasks/tasks.model';


@Component({
  selector: 'app-all-task-items',
  templateUrl: './all-task-items.component.html',
  styleUrls: ['./all-task-items.component.scss']
})
export class AllTaskItemsComponent implements OnInit {

  constructor(
    private tasksApi: TasksApiService,
    private tasksPrint: TasksPrintService
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "All Task Items", url: "/home/tasks/all-task-items" },
  ];

  taskItemsGridData: any[] = [];

  isFetchingGridData: boolean =  false;
  isDataAvailable: boolean =  true;

  firstInResponse: any = [];
  lastInResponse: any = [];
  prevStartAt: any = [];
  nextStartAt: any = [];
  pageNumber = 1;
  disableNext: boolean = false;
  disablePrev: boolean = true;

  sortParams = {
    field: "created_at",
    direction: "desc"
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getAllUserTaskItem(this.sortParams, 20, null);
  }

  getAllUserTaskItem(sorting: any, pageSize: any, pageStart: any){
    this.isFetchingGridData = true;

    this.tasksApi.getAllUserTaskItem(sorting, pageSize, pageStart)
      .then(
        (res: any) => {
          console.log(res);

          this.taskItemsGridData = res.docs;
          this.isFetchingGridData = false;
          if (!res.docs.length) this.isDataAvailable = false;

          this.prevStartAt = this.firstInResponse;
          this.nextStartAt = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];

          this.disableNext = false;
          this.disablePrev = false;
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  nextPage(e: any){
    e.preventDefault();
    this.disableNext = true;

    this.sortParams = { field: "created_at", direction: "desc" };
    this.getAllUserTaskItem(this.sortParams, 20, this.nextStartAt);
    this.pageNumber++;
  }

  previousPage(e: any){
    e.preventDefault();
    this.disablePrev = true;

    this.sortParams = { field: "created_at", direction: "desc" };
    this.getAllUserTaskItem(this.sortParams, 20, this.prevStartAt);
    this.pageNumber--;
  }

  sortTable(field: any, direction: any){
    this.sortParams.field = field;
    this.sortParams.direction = direction;

    this.getAllUserTaskItem(this.sortParams, 20, null);
  }

  onPrint(){
    console.log("lets start printing...");
    // this.tasksPrint.getPrintAllTaskItems(this.totalItems);
  }

}
