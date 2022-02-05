import { Component, OnInit, ViewChild } from '@angular/core';

import { TablePaginationComponent } from 'projects/personal/src/app/components/module-utilities/table-pagination/table-pagination.component'
import { TableSortingComponent } from 'projects/personal/src/app/components/module-utilities/table-sorting/table-sorting.component'
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
  @ViewChild('tablePaginationComponentReference', { read: TablePaginationComponent, static: false }) tablePagination!: TablePaginationComponent;
  @ViewChild('taskItemSortingComponentReference', { read: TableSortingComponent, static: false }) taskItemSorting!: TableSortingComponent;
  @ViewChild('prioritySortingComponentReference', { read: TableSortingComponent, static: false }) prioritySorting!: TableSortingComponent;
  @ViewChild('startDateSortingComponentReference', { read: TableSortingComponent, static: false }) startDateSorting!: TableSortingComponent;
  @ViewChild('endDateSortingComponentReference', { read: TableSortingComponent, static: false }) endDateSorting!: TableSortingComponent;
  @ViewChild('statusSortingComponentReference', { read: TableSortingComponent, static: false }) statusSorting!: TableSortingComponent;
  @ViewChild('taskGroupSortingComponentReference', { read: TableSortingComponent, static: false }) taskGroup!: TableSortingComponent;

  navHeading: any[] = [
    { text: "All Task Items", url: "/home/tasks/all-task-items" },
  ];

  taskItemsGridData: TaskItem[] = [];

  currentPage = 0;
  totalPages = 0;
  totalItems = 0;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getAllUserTaskItem();
  }

  getAllUserTaskItem(){
    this.tasksApi.getAllUserTaskItem({}, 20, {})
      .then(
        (res: any) => {
          console.log(res);
          this.taskItemsGridData = res.results;
          this.currentPage = res.current_page;
          this.totalPages = res.total_pages;
          this.totalItems = res.count;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  sortTable(field: any){
    console.log(field);
    this.getAllUserTaskItem();

    if((field == 'taskItem') || (field == "-taskItem")){
      this.prioritySorting.resetSort();
      this.startDateSorting.resetSort();
      this.endDateSorting.resetSort();
      this.statusSorting.resetSort();
      this.taskGroup.resetSort();
    }
    else if((field == 'priority') || (field == "-priority")){
      this.taskItemSorting.resetSort();
      this.startDateSorting.resetSort();
      this.endDateSorting.resetSort();
      this.statusSorting.resetSort();
      this.taskGroup.resetSort();
    }
    else if((field == 'start_date') || (field == "-start_date")){
      this.taskItemSorting.resetSort();
      this.prioritySorting.resetSort();
      this.endDateSorting.resetSort();
      this.statusSorting.resetSort();
      this.taskGroup.resetSort();
    }
    else if((field == 'end_date') || (field == "-end_date")){
      this.taskItemSorting.resetSort();
      this.prioritySorting.resetSort();
      this.startDateSorting.resetSort();
      this.statusSorting.resetSort();
      this.taskGroup.resetSort();
    }
    else if((field == 'status') || (field == "-status")){
      this.taskItemSorting.resetSort();
      this.prioritySorting.resetSort();
      this.startDateSorting.resetSort();
      this.endDateSorting.resetSort();
      this.taskGroup.resetSort();
    }
    else if((field == 'task_group') || (field == "-task_group")){
      this.taskItemSorting.resetSort();
      this.prioritySorting.resetSort();
      this.startDateSorting.resetSort();
      this.endDateSorting.resetSort();
      this.statusSorting.resetSort();
    }
  }

  onPrint(){
    console.log("lets start printing...");
    this.tasksPrint.getPrintAllTaskItems(this.totalItems);
  }

}
