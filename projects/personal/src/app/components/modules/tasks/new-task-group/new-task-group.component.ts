import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

import { serverTimestamp } from 'firebase/firestore';

import { ConnectionToastComponent } from '../../../module-utilities/connection-toast/connection-toast.component'

import { TasksApiService } from 'projects/personal/src/app/services/modules/tasks-api/tasks-api.service';

import { TaskGroup } from 'projects/personal/src/app/models/modules/tasks/tasks.model';



@Component({
  selector: 'app-new-task-group',
  templateUrl: './new-task-group.component.html',
  styleUrls: ['./new-task-group.component.scss']
})
export class NewTaskGroupComponent implements OnInit {

  constructor(
    private router: Router,
    private tasksApi: TasksApiService
  ) { }

  @ViewChild('newButtonElementReference', { read: ElementRef, static: false }) newButton!: ElementRef;
  @ViewChild('dismissButtonElementReference', { read: ElementRef, static: false }) dismissButton!: ElementRef;
  @ViewChild('connectionToastComponentReference', { read: ConnectionToastComponent, static: false }) connectionToast!: ConnectionToastComponent;

  taskGroupForm: FormGroup = new FormGroup({});

  isTaskGroupSaving = false;

  ngOnInit(): void {
    this.initTaskForm();
  }

  openModal(){
    this.newButton.nativeElement.click();
  }

  initTaskForm(){
    this.taskGroupForm = new FormGroup({
      taskGroupName: new FormControl('')
    })
  }

  createTaskGroup(){
    let data: TaskGroup = {
      created_at: serverTimestamp(),
      user: localStorage.getItem('personal_id') as string,
      task_group: this.taskGroupForm.controls.taskGroupName.value,
    }

    console.log(data);
    this.isTaskGroupSaving = true;

    this.tasksApi.createTaskGroup(data)
      .then(
        (res: any) => {
          console.log(res);

          if(res.id){
            sessionStorage.setItem('personal_task_group_id', res.id);
            this.router.navigateByUrl('/home/tasks/view-task-group/kanban-view');
            this.dismissButton.nativeElement.click();
          }
          this.isTaskGroupSaving = false;
        },
        (err: any) => {
          console.log(err);
          this.isTaskGroupSaving = false;
          this.connectionToast.openToast();
        }
      )
  }


}
