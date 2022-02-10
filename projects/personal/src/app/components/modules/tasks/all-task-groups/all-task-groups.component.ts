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
    this.getAllUserTaskGroup(this.sortParams, 20, null);
  }

  getAllUserTaskGroup(sorting: any, pageSize: any, pageStart: any){
    this.isFetchingGridData = true;

    this.tasksApi.getAllUserTaskGroup(sorting, pageSize, pageStart)
      .then(
        (res: any) => {
          console.log(res);

          this.taskGroupsGridData = res.docs;
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

  viewTaskGroup(id: any){
    console.log(id);

    sessionStorage.setItem('personal_task_group_id', id);
    this.router.navigateByUrl('/home/tasks/view-task-group/kanban-view')
  }

  nextPage(e: any){
    e.preventDefault();
    this.disableNext = true;

    this.sortParams = { field: "created_at", direction: "desc" };
    this.getAllUserTaskGroup(this.sortParams, 20, this.nextStartAt);
    this.pageNumber++;
  }

  previousPage(e: any){
    e.preventDefault();
    this.disablePrev = true;

    this.sortParams = { field: "created_at", direction: "desc" };
    this.getAllUserTaskGroup(this.sortParams, 20, this.prevStartAt);
    this.pageNumber--;
  }

  sortTable(field: any, direction: any){
    this.sortParams.field = field;
    this.sortParams.direction = direction;

    this.getAllUserTaskGroup(this.sortParams, 20, null);
  }

  onPrint(){
    console.log("lets start printing...");
    // this.tasksPrint.getPrintTaskGroups(this.totalItems);
  }

}
