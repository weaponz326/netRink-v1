import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NewTaskGroupComponent } from '../new-task-group/new-task-group.component'
import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'

import { TasksApiService } from 'projects/personal/src/app/services/modules/tasks-api/tasks-api.service';
import { TasksPrintService } from 'projects/personal/src/app/services/printing/tasks-print/tasks-print.service';

import { TaskGroup } from 'projects/personal/src/app/models/modules/tasks/tasks.model';


@Component({
  selector: 'app-all-task-groups',
  templateUrl: './all-task-groups.component.html',
  styleUrls: ['./all-task-groups.component.scss']
})
export class AllTaskGroupsComponent implements OnInit {

  constructor(
    private router: Router,
    private tasksApi: TasksApiService,
    private tasksPrint: TasksPrintService
  ) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;
  @ViewChild('newTaskGroupComponentReference', { read: NewTaskGroupComponent, static: false }) newTaskGroup!: NewTaskGroupComponent;

  navHeading: any[] = [
    { text: "All Task Groups", url: "/home/tasks/all-task-groups" },
  ];

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
    this.getUserTaskGroup();
  }

  getUserTaskGroup(){
    this.isFetchingGridData = true;

    this.tasksApi.getUserTaskGroup(this.sortParams, 20)
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
          else this.isDataAvailable = true;

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

    this.tasksApi.getUserTaskGroupNext(this.sortParams, 20, this.nextStartAfter)
      .then(
        (res: any) => {
          console.log(res);
          this.taskGroupsGridData = res.docs;

          this.isFetchingGridData = false;
          this.prevStartAt = this.firstInResponse;
          this.nextStartAfter = res.docs[res.docs.length - 1];
          this.firstInResponse = res.docs[0];
          this.pageNumber++;

          if (res.docs.length < 20){
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

    this.tasksApi.getUserTaskGroupPrev(this.sortParams, 20, this.prevStartAt)
      .then(
        (res: any) => {
          console.log(res);
          this.taskGroupsGridData = res.docs;

          this.isFetchingGridData = false;
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

  viewTaskGroup(id: any){
    console.log(id);

    sessionStorage.setItem('personal_task_group_id', id);
    this.router.navigateByUrl('/home/tasks/view-task-group/kanban-view')
  }

  onPrint(){
    console.log("lets start printing...");
    this.tasksPrint.printAllTaskGroups();
  }

}
