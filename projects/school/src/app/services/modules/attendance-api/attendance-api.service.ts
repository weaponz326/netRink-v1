import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AttendanceApiService {

  constructor(private afs: AngularFirestore) { }

  attendanceRef = this.afs.collection('school/module_attendance/school_attendance');

  // attendance

  createAttendance(attendance: any){
    return this.attendanceRef.add(attendance);
  }

  getAttendance(){
    return this.attendanceRef.doc(String(sessionStorage.getItem('school_attendance_id'))).ref.get();
  }

  updateAttendance(attendance: any){
    return this.attendanceRef.doc(String(sessionStorage.getItem('school_attendance_id'))).update(attendance);
  }

  deleteAttendance(){
    return this.attendanceRef.doc(String(sessionStorage.getItem('school_attendance_id'))).delete();
  }

  getAccountAttendance(sorting: any, pageSize: any){
    return this.attendanceRef.ref
      .where("account", "==", localStorage.getItem('school_id'))
      .orderBy(sorting?.field, sorting?.direction)
      .limit(pageSize)
      .get();
  }

  getAccountAttendanceNext(sorting: any, pageSize: any, pageStart: any){
    return this.attendanceRef.ref
      .where("account", "==", localStorage.getItem('school_id'))
      .orderBy(sorting?.field, sorting?.direction)
      .startAfter(pageStart)
      .limit(pageSize)
      .get();
  }

  getAccountAttendancePrev(sorting: any, pageSize: any, pageStart: any){
    return this.attendanceRef.ref
      .where("account", "==", localStorage.getItem('school_id'))
      .orderBy(sorting?.field, sorting?.direction)
      .startAt(pageStart)
      .limit(pageSize)
      .get();
  }

  getAllAccountAttendance(){
    return this.attendanceRef.ref
      .where("account", "==", localStorage.getItem('school_id'))
      .orderBy("created_by" ,"desc")
      .get();
  }

}
