import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class TasksApiService {

  constructor(
    private afs: AngularFirestore
  ) { }

  taskGroupRef = this.afs.collection('personal/module_tasks/tasks_task_group');
  taskItemRef = this.afs.collection('personal/module_tasks/tasks_task_item');

  // task groups

  createTaskGroup(taskGroup: any){
    return this.taskGroupRef.add(taskGroup);
  }

  getTaskGroup(){
    return this.taskGroupRef.doc(String(sessionStorage.getItem('personal_task_group_id'))).ref.get();
  }

  updateTaskGroup(taskGroup: any){
    return this.taskGroupRef.doc(String(sessionStorage.getItem('personal_task_group_id'))).update(taskGroup);
  }

  deleteTaskGroup(){
    return this.taskGroupRef.doc(String(sessionStorage.getItem('personal_task_group_id'))).delete();
  }

  getAllUserTaskGroup(ordering: any, pageSize: any, pageStart: any){
    return this.taskGroupRef.ref
      .where("user", "==", localStorage.getItem('personal_id'))
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
      .where("calendar.uid", "==", String(sessionStorage.getItem('personal_task_group_id')))
      .get();
  }

  getAllUserTaskItem(ordering: any, pageSize: any, pageStart: any){
    return this.taskItemRef.ref
      .where("user", "==", localStorage.getItem('personal_id'))
      .orderBy(ordering.field, ordering.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

}
