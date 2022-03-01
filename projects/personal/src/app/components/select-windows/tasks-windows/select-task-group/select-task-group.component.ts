import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component';

import { TasksApiService } from 'projects/personal/src/app/services/modules/tasks-api/tasks-api.service';


@Component({
  selector: 'app-select-task-group',
  templateUrl: './select-task-group.component.html',
  styleUrls: ['./select-task-group.component.scss']
})
export class SelectTaskGroupComponent implements OnInit {

  constructor(private tasksApi: TasksApiService) { }

  @Output() taskGroupSelected = new EventEmitter<object>();

  @ViewChild('openButtonElementReference', { read: ElementRef, static: false }) openButton!: ElementRef;
  @ViewChild('closeButtonElementReference', { read: ElementRef, static: false }) closeButton!: ElementRef;

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  taskGroupsGridData: any[] = [];

  isFetchingGridData: boolean =  false;
  isDataAvailable: boolean =  true;

  firstInResponse: any = [];
  lastInResponse: any = [];
  prevStartAt: any = [];
  nextStartAfter: any = [];
  pageNumber = 0;
  disableNext: boolean = true;
  disablePrev: boolean = true;

  sortParams = {
    field: "created_at",
    direction: "desc"
  }

  ngOnInit(): void {
  }

  openModal(){
    this.getUserTaskGroup();
    this.openButton.nativeElement.click();
  }

  getUserTaskGroup(){
    this.isFetchingGridData = true;

    this.tasksApi.getUserTaskGroup(this.sortParams, 15)
      .then(
        (res: any) => {
          console.log(res);
          this.taskGroupsGridData = res.docs;

          this.isFetchingGridData = false;
          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber = 1;
          if (!res.docs.length) this.isDataAvailable = false;

          if (!res.docs.length || res.docs.length < 20){
            this.disableNext = true;
            this.disablePrev = true;
          }
          else{
            this.disableNext = false;
            this.disablePrev = true;
          }
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
    this.isFetchingGridData = true;

    this.tasksApi.getUserTaskGroupNext(this.sortParams, 15, this.nextStartAfter)
      .then(
        (res: any) => {
          console.log(res);
          this.taskGroupsGridData = res.docs;

          this.isFetchingGridData = false;
          if (!res.docs.length) this.isDataAvailable = false;

          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber++;

          if (res.docs.length < 15){
            this.disableNext = true;
            this.disablePrev = false;
          }
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  previousPage(e: any){
    e.preventDefault();
    this.isFetchingGridData = true;

    this.tasksApi.getUserTaskGroupPrev(this.sortParams, 15, this.prevStartAt)
      .then(
        (res: any) => {
          console.log(res);
          this.taskGroupsGridData = res.docs;

          this.isFetchingGridData = false;
          if (!res.docs.length) this.isDataAvailable = false;

          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber--;

          if (this.pageNumber == 1){
            this.disableNext = false;
            this.disablePrev = true;
          }
        },
        (err: any) => {
          console.log(err);
          this.isFetchingGridData = false;
          this.connectionToast.openToast();
        }
      )
  }

  sortTable(field: any, direction: any){
    this.sortParams.field = field;
    this.sortParams.direction = direction;

    this.getUserTaskGroup();
  }

  selectRow(row: any){
    this.taskGroupSelected.emit(row);
    this.closeButton.nativeElement.click();
    console.log(row);
  }

}
