import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

import { environment } from 'projects/personal/src/environments/environment'
import { EndpointsService } from 'projects/application/src/app/services/endpoints/endpoints.service';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class TasksApiService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService,
    private afs: AngularFirestore
  ) { }

  taskGroupRef = this.afs.collection('personal/taks/task-group');
  taskItemRef = this.afs.collection('personal/taks/task-item');

  personalId = localStorage.getItem('personal_id') as string;
  taskGroupId = sessionStorage.getItem('personal_task_group_id') as string;

  // task groups

  createTaskGroup(taskGroup: any){
    return this.taskGroupRef.add(taskGroup);
  }

  getTaskGroup(){
    return this.taskGroupRef.doc(this.taskGroupId).ref.get();
  }

  updateTaskGroup(taskGroup: any){
    return this.taskGroupRef.doc(this.taskGroupId).update(taskGroup);
  }

  deleteTaskGroup(){
    return this.taskGroupRef.doc(this.taskGroupId).delete();
  }

  getAllUserTaskGroup(ordering: any, pageSize: any, pageStart: any){
    return this.taskGroupRef.ref
      .where("user", "==", this.personalId)
      .orderBy(ordering.field, ordering.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

  // task items

  createTaskItem(taskItem: any){
    return this.taskItemRef.add(taskItem);
  }

  getTaskItem(taskItemId: any){
    return this.taskItemRef.doc(taskItemId).ref.get();
  }

  updateTaskItem(taskItemId: any, taskItem: any){
    return this.taskItemRef.doc(taskItemId).update(taskItem);
  }

  deleteTaskItem(taskItemId: any){
    return this.taskItemRef.doc(taskItemId).delete();
  }

  getAllTaskGroupTaskItem(){
    return this.taskItemRef.ref
      .where("calendar.uid", "==", this.taskGroupId)
      .get();
  }

  getAllUserTaskItem(ordering: any, pageSize: any, pageStart: any){
    return this.taskItemRef.ref
      .where("user", "==", this.personalId)
      .orderBy(ordering.field, ordering.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

}
