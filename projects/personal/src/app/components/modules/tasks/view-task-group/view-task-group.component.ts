import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'

import { TasksApiService } from 'projects/personal/src/app/services/modules/tasks-api/tasks-api.service';

import { TaskGroup } from 'projects/personal/src/app/models/modules/tasks/tasks.model';


@Component({
  selector: 'app-view-task-group',
  templateUrl: './view-task-group.component.html',
  styleUrls: ['./view-task-group.component.scss']
})
export class ViewTaskGroupComponent implements OnInit {

  constructor(private tasksApi: TasksApiService) { }

  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  navHeading: any[] = [
    { text: "View Task Group", url: "/home/tasks/view-task-group" },
  ];

  taskGroupForm: FormGroup = new FormGroup({});
  taskGroupFormData: TaskGroup = {uid: "", user: "", task_group: "", created_at: new Date()};

  isTaskGroupSaving: boolean = false;

  ngOnInit(): void {
    this.initTaskGroupForm();
  }

  ngAfterViewInit(): void {
    this.getTaskGroup();
  }

  initTaskGroupForm(){
    this.taskGroupForm = new FormGroup({
      taskGroupName: new FormControl('')
    })
  }

  getTaskGroup(){
    this.tasksApi.getTaskGroup()
      .then(
        (res: any) => {
          console.log(res);
          this.taskGroupFormData = res
          this.taskGroupForm.controls.taskGroupName.setValue(this.taskGroupFormData.task_group);
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
        }
      )
  }

  updateTaskGroup(){
    let data: TaskGroup = {
      uid: this.taskGroupFormData.uid,
      user: localStorage.getItem('personal_id') as string,
      task_group: this.taskGroupForm.controls.taskGroupName.value,
      created_at: this.taskGroupFormData.created_at
    }

    console.log(data);
    this.isTaskGroupSaving = true;

    this.tasksApi.updateTaskGroup(data)
      .then(
        (res: any) => {
          console.log(res);
          this.isTaskGroupSaving = false;
        },
        (err: any) => {
          console.log(err);
          this.connectionToast.openToast();
          this.isTaskGroupSaving = false;
        }
      )
  }

}
